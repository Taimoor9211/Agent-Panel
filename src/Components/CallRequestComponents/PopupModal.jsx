import React from "react";

const PopupModal = ({ 
  showPopup, 
  keyPoints, 
  setKeyPoints, 
  handleCancelPopup, 
  handleConfirmMarkAsDone 
}) => {
  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="w-[520px] bg-white rounded-xl shadow-lg">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-[18px] font-semibold text-[#1F2937]">
            MARK AS COMPLETE
          </h2>
          <button
            onClick={handleCancelPopup}
            className="text-gray-400 hover:text-gray-600 text-xl leading-none"
          >
            ×
          </button>
        </div>

        {/* Body */}
        <div className="px-6 pt-6 pb-4">
          <p className="text-[14px] text-[#4B5563] mb-4">
            Do you want to mark this call as Completed?
          </p>
          <textarea
            value={keyPoints}
            onChange={(e) => setKeyPoints(e.target.value)}
            placeholder="Add Key Points ........"
            className="w-full h-[95px] rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#515DEF]"
          />
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 px-6 py-4">
          <button
            onClick={handleCancelPopup}
            className="px-6 py-2.5 rounded-lg border border-[#E5E7EB] text-sm text-gray-700 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirmMarkAsDone}
            className="px-6 py-2.5 rounded-lg bg-[#515DEF] text-sm text-white hover:bg-[#3F4BDA]"
          >
            Proceed
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;