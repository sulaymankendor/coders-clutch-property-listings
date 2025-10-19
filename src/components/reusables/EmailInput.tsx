import React from "react";
import { Eye, EyeOff, LockKeyhole, Mail } from "lucide-react";

function EmailInput() {
  return (
    <div className="flex items-center font-medium outline-[1px] outline-gray-300 rounded-lg">
      <div className="py-1 pl-[11px]">
        <Mail className="text-gray-400" size={16} />
      </div>

      <input
        name="email"
        placeholder="example@gmail.com"
        // onChange={(event) => setEmail(event.target.value)}
        className="font-normal outline-0 text-[13px] text-gray-600 w-full py-[10px] px-2"
      />
    </div>
  );
}

export default EmailInput;
