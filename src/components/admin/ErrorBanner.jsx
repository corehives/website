import { AlertCircle } from "lucide-react";

/**
 * Inline error banner for request failures.
 */
function ErrorBanner({ message, onRetry }) {
  if (!message) return null;
  return (
    <div className="mb-5 flex items-start gap-3 rounded-2xl border border-red-400/20 bg-red-500/5 px-4 py-3.5">
      <AlertCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
      <p className="flex-1 text-sm text-red-300 leading-relaxed">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="text-xs font-medium text-red-200 underline underline-offset-2 hover:text-white transition-colors"
        >
          Retry
        </button>
      )}
    </div>
  );
}

export default ErrorBanner;
