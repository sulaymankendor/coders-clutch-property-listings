import { Mail } from "lucide-react";

function EmailInput({
  email,
  setEmail,
}: {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
}) {
  return (
    <div className="flex items-center font-medium outline-[1px] outline-gray-300 rounded-lg">
      <div className="py-1 pl-[11px]">
        <Mail className="text-gray-400" size={16} />
      </div>

      <input
        required
        id="email"
        type="email"
        placeholder="example@gmail.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        // onChange={(event) => setEmail(event.target.value)}
        className="font-normal outline-0 text-[13px] text-gray-600 w-full py-[10px] px-2"
      />
    </div>
  );
}

export default EmailInput;
