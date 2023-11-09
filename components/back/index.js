import { useRouter } from "next/navigation";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
function BackButton() {
  const router = useRouter();
  return (
    <div className="flex flex-row my-8">
      <button
        className="dark:bg-dark-blue-elements w-32 p-2 rounded-md drop-shadow-lg font-light shadow bg-elements-white"
        onClick={() => router.push("/")}
      >
        <BsArrowLeft className="absolute z-10 self-center ml-2 " />
        Back
      </button>
    </div>
  );
}

export default BackButton;
