import { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const FORMSPARK_ENDPOINT = 'https://submit-form.com/BnqmR2HnE';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  interest: '',
  message: '',
};

const toastStyles = {
  success: 'border-green-200 bg-green-50 text-green-800',
  error: 'border-red-200 bg-red-50 text-red-700',
};

const ConsultationForm = ({
  onSuccess,
  onError,
  className = '',
  buttonText = 'Send consultation request',
  hideHeader = false,
}) => {
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    if (!toast) return undefined;

    const timer = window.setTimeout(() => setToast(null), 4200);
    return () => window.clearTimeout(timer);
  }, [toast]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(FORMSPARK_ENDPOINT, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Form submission failed: ${response.status}`);
      }

      setFormData(initialForm);
      setToast({
        type: 'success',
        message: 'Thank you. Your request has been sent successfully. We will contact you as soon as possible.',
      });

      if (onSuccess) {
        window.setTimeout(() => onSuccess(), 1200);
      }
    } catch (error) {
      console.error('FormSpark submission failed:', error);
      setToast({
        type: 'error',
        message: 'Sorry, your message could not be sent right now. Please try again or contact us on WhatsApp for a faster response.',
      });
      if (onError) {
        onError(error);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {toast && (
        <div className={`fixed right-5 top-5 z-[70] max-w-sm rounded-2xl border shadow-2xl backdrop-blur-sm ${toastStyles[toast.type]}`}>
          <div className="flex items-start gap-3 p-4">
            <div className={`mt-0.5 flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${toast.type === 'success' ? 'bg-green-600 text-white' : 'bg-red-600 text-white'}`}>
              {toast.type === 'success' ? '✓' : '!'}
            </div>
            <p className="text-sm font-medium leading-6">{toast.message}</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className={className || 'space-y-5'}>
        {!hideHeader && (
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-orange-600">Schedule a consultation</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Start with a conversation.</h2>
            <p className="mt-4 leading-7 text-slate-600">Share a little about your goals and the kind of support you need.</p>
          </div>
        )}

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            Full name
            <input
              required
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            Email address
            <input
              required
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            />
          </label>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            Phone number <span className="font-normal text-green-700">(preferably WhatsApp)</span>
            <input
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Your phone number"
              className="w-full rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-slate-700">
            I&apos;m interested in
            <select
              required
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
            >
              <option value="" disabled>Select an option</option>
              <option>Programs for learners</option>
              <option>Teacher development</option>
              <option>School partnership</option>
              <option>Online tutoring</option>
              <option>Other</option>
            </select>
          </label>
        </div>

        <label className="block space-y-2 text-sm font-semibold text-slate-700">
          How can we help?
          <textarea
            required
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            placeholder="Share your goals or questions..."
            className="w-full resize-none rounded-xl border border-slate-200 px-4 py-3 font-normal outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100"
          />
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-orange-500 to-yellow-500 px-6 py-4 font-semibold text-white shadow-lg shadow-orange-200 transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
        >
          {isSubmitting ? 'Sending...' : buttonText}
          <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      </form>
    </>
  );
};

export default ConsultationForm;
