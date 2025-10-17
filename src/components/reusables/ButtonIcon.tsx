import React from "react";

function ButtonIcon({ icon, className }: { icon: any; className: string }) {
  return <button className={className}>{icon}</button>;
}

export default ButtonIcon;
