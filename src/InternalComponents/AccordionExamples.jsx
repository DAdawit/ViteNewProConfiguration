import React from "react";
import Accordion from "./common/Accordion";

// Random paragraph generator
const getRandomParagraph = () => {
  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",

    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",

    "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",

    "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",

    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",

    "The quick brown fox jumps over the lazy dog. This is a sample paragraph to demonstrate the accordion content. You can put any kind of content here, including text, images, forms, or other components.",

    "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",

    "Component-based approach allows you to build encapsulated components that manage their own state, then compose them to make complex UIs. Since component logic is written in JavaScript instead of templates, you can easily pass rich data through your app.",
  ];

  return paragraphs[Math.floor(Math.random() * paragraphs.length)];
};

// Sample accordion items for FAQ
const accordionItems = [
  {
    title: "What is Lorem Ipsum?",
    leftContent: "Popular",
    rightContent: null,
  },
  {
    title: "Why do we use it?",
    leftContent: "Updated",
    rightContent: null,
  },
  {
    title: "Where does it come from?",
    leftContent: "New",
    rightContent: null,
  },
  {
    title: "Where can I get some?",
    leftContent: "Featured",
    rightContent: null,
  },
];

const AccordionExamples = () => {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Accordion Component
        </h1>
        <p className="text-gray-600">
          Beautiful, animated accordion with multiple variants
        </p>
      </div>

      {/* Example 1: Default Accordion */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          1. Default Accordion
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Standard accordion with chevron icon
        </p>
        <Accordion headerTitle="What is Lorem Ipsum?">
          <p className="text-gray-700 leading-relaxed">
            {getRandomParagraph()}
          </p>
          <div className="mt-3 p-3 bg-gray-50 rounded-md">
            <p className="text-sm text-gray-600">
              Additional content can be placed here.
            </p>
          </div>
        </Accordion>
      </div>

      {/* Example 2: With Left Content Badge */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          2. With Badge & Right Content
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Header with status badges and additional content
        </p>
        <Accordion
          headerTitle="Why do we use it?"
          headerLeftContent="Updated Today"
          headerRightContent={
            <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
              3 new comments
            </span>
          }
        >
          <div className="space-y-3">
            <p className="text-gray-700 leading-relaxed">
              {getRandomParagraph()}
            </p>
            <div className="flex gap-2">
              <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
                React
              </span>
              <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">
                Component
              </span>
              <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                Accordion
              </span>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Example 3: Different Sizes */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          3. Different Sizes
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Small, medium, and large accordions
        </p>
        <div className="space-y-3">
          <Accordion headerTitle="Small Accordion (sm)" size="sm">
            <p className="text-gray-700 text-sm">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Medium Accordion (md)" size="md">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Large Accordion (lg)" size="lg">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
        </div>
      </div>

      {/* Example 4: Different Variants */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">4. Variants</h2>
        <p className="text-sm text-gray-500 mb-3">Different visual styles</p>
        <div className="space-y-3">
          <Accordion headerTitle="Bordered Variant" variant="bordered">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Shadow Variant" variant="shadow">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Minimal Variant" variant="minimal">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
        </div>
      </div>

      {/* Example 5: Different Icons */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">5. Icon Types</h2>
        <p className="text-sm text-gray-500 mb-3">
          Chevron, plus/minus, or no icon
        </p>
        <div className="space-y-3">
          <Accordion headerTitle="Chevron Icon (Default)" iconType="chevron">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Plus/Minus Icon" iconType="plus-minus">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="No Icon" showIcon={false}>
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
        </div>
      </div>

      {/* Example 6: Custom Header Background */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          6. Custom Header Background
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Different header background colors
        </p>
        <div className="space-y-3">
          <Accordion headerTitle="Blue Header" headerBg="bg-blue-50">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Green Header" headerBg="bg-green-50">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
          <Accordion headerTitle="Purple Header" headerBg="bg-purple-50">
            <p className="text-gray-700">{getRandomParagraph()}</p>
          </Accordion>
        </div>
      </div>

      {/* Example 7: Complex Content */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          7. Complex Content
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Rich content inside accordion
        </p>
        <Accordion headerTitle="Advanced Features">
          <div className="space-y-4">
            <p className="text-gray-700">{getRandomParagraph()}</p>

            <div className="grid grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">Feature 1</p>
                <p className="text-xs text-gray-600">
                  Description of feature 1
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">Feature 2</p>
                <p className="text-xs text-gray-600">
                  Description of feature 2
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">Feature 3</p>
                <p className="text-xs text-gray-600">
                  Description of feature 3
                </p>
              </div>
              <div className="p-3 bg-gray-50 rounded-lg">
                <p className="font-semibold text-sm">Feature 4</p>
                <p className="text-xs text-gray-600">
                  Description of feature 4
                </p>
              </div>
            </div>

            <button type="button" className="text-primary-600 text-sm hover:underline">
              Learn more →
            </button>
          </div>
        </Accordion>
      </div>

      {/* Example 8: Multiple Accordions (FAQ Section) */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">8. FAQ Section</h2>
        <p className="text-sm text-gray-500 mb-3">
          Multiple accordions in a row
        </p>
        <div className="space-y-3">
          {accordionItems.map((item, index) => (
            <Accordion
              key={item.title}
              headerTitle={item.title}
              headerLeftContent={item.leftContent}
              defaultOpen={index === 0}
            >
              <p className="text-gray-700 leading-relaxed">
                {getRandomParagraph()}
              </p>
            </Accordion>
          ))}
        </div>
      </div>

      {/* Example 9: With Custom Class */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          9. Custom Styling
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          With additional custom classes
        </p>
        <Accordion
          headerTitle="Custom Styled Accordion"
          className="shadow-xl border-primary-200"
          headerBg="bg-gradient-to-r from-blue-50 to-purple-50"
        >
          <div className="bg-gradient-to-r from-gray-50 to-white p-4 rounded-lg">
            <p className="text-gray-700">{getRandomParagraph()}</p>
            <div className="mt-3 flex justify-end">
              <button type="button" className="text-primary-600 text-sm font-medium hover:text-primary-700">
                Take Action →
              </button>
            </div>
          </div>
        </Accordion>
      </div>

      {/* Example 10: Without Animation */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          10. Without Animation
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          Instant open/close without animations
        </p>
        <Accordion headerTitle="No Animation" animated={false}>
          <p className="text-gray-700">{getRandomParagraph()}</p>
        </Accordion>
      </div>

      {/* Example 11: Default Open */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          11. Default Open
        </h2>
        <p className="text-sm text-gray-500 mb-3">Starts in open state</p>
        <Accordion headerTitle="This is Open by Default" defaultOpen={true}>
          <p className="text-gray-700">{getRandomParagraph()}</p>
        </Accordion>
      </div>

      {/* Example 12: Custom Border Radius */}
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-gray-900">
          12. Custom Border Radius
        </h2>
        <p className="text-sm text-gray-500 mb-3">
          With custom rounded corners
        </p>
        <Accordion headerTitle="Custom Rounded Corners" className="rounded-2xl">
          <p className="text-gray-700">{getRandomParagraph()}</p>
        </Accordion>
      </div>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
        <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <InfoIcon size={18} />
          Features:
        </h3>
        <ul className="text-blue-800 text-sm space-y-1">
          <li>• Multiple variants (default, bordered, shadow, minimal)</li>
          <li>• Different sizes (sm, md, lg)</li>
          <li>• Icon options (chevron, plus/minus, none)</li>
          <li>• Smooth animations (toggleable)</li>
          <li>• Customizable header background</li>
          <li>• Left and right content slots</li>
          <li>• Fully accessible (ARIA labels)</li>
          <li>• Responsive design</li>
          <li>• Custom className support</li>
          <li>• Keyboard navigation support</li>
        </ul>
      </div>
    </div>
  );
};

// Helper Info icon component
const InfoIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);

export default AccordionExamples;
