import TestPage from "@/component/mocktest/TestPage";

export default function TestModeLayout({ children }) {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-xl p-6">
        {/* Special Header */}
        <h1 className="text-xl font-bold text-blue-600 mb-4">
          Test Mode Active
        </h1>

        <TestPage />
      </div>
    </div>
  );
}
