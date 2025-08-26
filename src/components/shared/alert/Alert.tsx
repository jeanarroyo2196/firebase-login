import { CloseAlert } from "../../../assets/icons/CloseAlert";

interface AlertProps {
  message?: string;
  register: boolean;
  setRegister: (value: boolean) => void;
  setMessage: (value: string) => void;
}

export const Alert = ({
  message,
  register,
  setRegister,
  setMessage,
}: AlertProps) => {
  if (!message) return null;

  return (
    <div className="max-w-5xl mx-auto px-4 md:px-8">
      <div className="flex justify-between p-4 rounded-md bg-red-50 border border-red-300">
        <div className="flex gap-3 sm:items-center">
          <div>
            <CloseAlert />
          </div>
          <p className="text-red-600 sm:text-sm">
            {message}{" "}
            {!register && (
              <a
                className="underline font-medium hover:text-red-700 cursor-pointer"
                onClick={() => {
                  setRegister(true);
                  setMessage("");
                }}
              >
                Sign up?
              </a>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
