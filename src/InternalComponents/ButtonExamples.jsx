import React, { useState } from "react";
import {
  Search,
  Trash2,
  Save,
  Plus,
  Settings,
  User,
  Mail,
  Heart,
  Star,
  Upload,
  Download,
  RefreshCw,
  Lock,
  Check,
  X,
  AlertCircle,
  Bell,
  Home,
  LogIn,
  LogOut,
  ShoppingCart,
  Camera,
  Link as LinkIcon,
  FileText,
  MessageSquare,
  Share2,
  Bookmark,
  EyeOff,
  ThumbsUp,
  ExternalLink,
  ArrowRight,
  Info,
  Send,
  Phone,
  HelpCircle,
  ArrowLeft,
  ChevronRight,
  ChevronLeft,
  Calendar,
  Clock,
  MapPin,
  CreditCard,
  Gift,
  Zap,
  Edit,
  Trash,
  Copy,
} from "lucide-react";

import ButtonComponent from "./common/Buttons/ButtonComponent";

const ButtonExamples = () => {
  // Loading states
  const [isSaving, setIsSaving] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isUploading, setIsUploading] = useState(false);

  // Handlers
  const handleSave = async () => {
    setIsSaving(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSaving(false);
    alert("Saved successfully!");
  };

  const handleDelete = async () => {
    setIsDeleting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsDeleting(false);
    alert("Deleted successfully!");
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    alert("Submitted successfully!");
  };

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsRefreshing(false);
    alert("Refreshed!");
  };

  const handleUpload = async () => {
    setIsUploading(true);
    await new Promise((resolve) => setTimeout(resolve, 2500));
    setIsUploading(false);
    alert("Upload complete!");
  };

  return (
    <div className="p-8 space-y-12 max-w-6xl mx-auto">
      {/* Section 1: Button Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">1. Button Variants</h2>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-blue-900 mb-2">Documentation:</h3>
          <p className="text-blue-800 text-sm">
            Button variants control the visual style and behavior of the button.
            Each variant serves a different use case:
          </p>
          <ul className="list-disc list-inside text-blue-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-blue-100 px-1 rounded">filled</code> - Solid
              background, best for primary actions
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">outlined</code> -
              Border only, good for secondary actions
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">flat</code> - No
              background, minimal style
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">destructive</code> -
              For delete/remove actions with red styling
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">reject</code> - For
              cancel/reject actions
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">link</code> - Renders
              as an anchor tag for navigation
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">icon</code> - Icon-only
              button with hover effect
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">icon-filled</code> -
              Icon-only button with solid background
            </li>
            <li>
              <code className="bg-blue-100 px-1 rounded">icon-outlined</code> -
              Icon-only button with border
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Filled"
            variant="filled"
            icon={<Plus size={16} />}
          />
          <ButtonComponent
            title="Outlined"
            variant="outlined"
            icon={<Search size={16} />}
          />
          <ButtonComponent
            title="Flat"
            variant="flat"
            icon={<User size={16} />}
          />
          <ButtonComponent
            title="Destructive"
            variant="destructive"
            icon={<Trash2 size={16} />}
          />
          <ButtonComponent
            title="Reject"
            variant="reject"
            icon={<X size={16} />}
          />
          <ButtonComponent
            title="Link"
            variant="link"
            href="#"
            icon={<LinkIcon size={16} />}
          />
        </div>
      </section>

      {/* Section 2: Icon Button Variants (UPDATED with Destructive Icons) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">2. Icon Button Variants</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-green-900 mb-2">Documentation:</h3>
          <p className="text-green-800 text-sm">
            Icon-only buttons are perfect for toolbars, action menus, and
            space-constrained interfaces. Choose the variant based on your
            visual hierarchy needs:
          </p>
          <ul className="list-disc list-inside text-green-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-green-100 px-1 rounded">icon</code> -
              Transparent background with hover effect, ideal for subtle actions
            </li>
            <li>
              <code className="bg-green-100 px-1 rounded">icon-filled</code> -
              Solid background, great for primary icon actions
            </li>
            <li>
              <code className="bg-green-100 px-1 rounded">icon-outlined</code> -
              Bordered style, good for secondary icon actions
            </li>
            <li>
              <code className="bg-red-100 px-1 rounded">destructive-icon</code>{" "}
              - Red-themed transparent icon button for delete/danger actions
            </li>
            <li>
              <code className="bg-red-100 px-1 rounded">
                destructive-icon-filled
              </code>{" "}
              - Solid red background for high emphasis destructive actions
            </li>
            <li>
              <code className="bg-red-100 px-1 rounded">
                destructive-icon-outlined
              </code>{" "}
              - Red bordered icon button for secondary destructive actions
            </li>
            <li>
              Use <code className="bg-green-100 px-1 rounded">tooltipText</code>{" "}
              to provide labels for accessibility
            </li>
            <li>
              Icon size can be controlled via{" "}
              <code className="bg-green-100 px-1 rounded">iconWidth</code>/
              <code className="bg-green-100 px-1 rounded">iconHeight</code>{" "}
              props
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          {/* Default Icon Button */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Default Icon Button (icon)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          {/* Filled Icon Button */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Filled Icon Button (icon-filled)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon-filled"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          {/* Outlined Icon Button */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Outlined Icon Button (icon-outlined)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon-outlined"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          {/* Destructive Icon Button (NEW) */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-700">
              Destructive Icon Button (destructive-icon)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="destructive-icon"
                icon={<Trash2 size={20} />}
                tooltipText="Delete Item"
              />
              <ButtonComponent
                variant="destructive-icon"
                icon={<X size={20} />}
                tooltipText="Close"
              />
              <ButtonComponent
                variant="destructive-icon"
                icon={<AlertCircle size={20} />}
                tooltipText="Report"
              />
              <ButtonComponent
                variant="destructive-icon"
                icon={<LogOut size={20} />}
                tooltipText="Logout"
              />
            </div>
          </div>

          {/* Destructive Filled Icon Button (NEW) */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-700">
              Destructive Filled Icon Button (destructive-icon-filled)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="destructive-icon-filled"
                icon={<Trash2 size={20} />}
                tooltipText="Delete Permanently"
              />
              <ButtonComponent
                variant="destructive-icon-filled"
                icon={<X size={20} />}
                tooltipText="Close All"
              />
              <ButtonComponent
                variant="destructive-icon-filled"
                icon={<AlertCircle size={20} />}
                tooltipText="Report Issue"
              />
              <ButtonComponent
                variant="destructive-icon-filled"
                icon={<LogOut size={20} />}
                tooltipText="Sign Out"
              />
            </div>
          </div>

          {/* Destructive Outlined Icon Button (NEW) */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-red-700">
              Destructive Outlined Icon Button (destructive-icon-outlined)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="destructive-icon-outlined"
                icon={<Trash2 size={20} />}
                tooltipText="Remove"
              />
              <ButtonComponent
                variant="destructive-icon-outlined"
                icon={<X size={20} />}
                tooltipText="Dismiss"
              />
              <ButtonComponent
                variant="destructive-icon-outlined"
                icon={<AlertCircle size={20} />}
                tooltipText="Warn"
              />
              <ButtonComponent
                variant="destructive-icon-outlined"
                icon={<LogOut size={20} />}
                tooltipText="Exit"
              />
            </div>
          </div>

          {/* Size Comparison for Destructive Icons */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Destructive Icon Sizes
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="destructive-icon-filled"
                size="sm"
                icon={<Trash2 size={14} />}
                tooltipText="Small Delete"
              />
              <ButtonComponent
                variant="destructive-icon-filled"
                size="md"
                icon={<Trash2 size={18} />}
                tooltipText="Medium Delete"
              />
              <ButtonComponent
                variant="destructive-icon-filled"
                size="lg"
                icon={<Trash2 size={22} />}
                tooltipText="Large Delete"
              />
            </div>
          </div>
        </div>
      </section>
      {/* Section 2: Icon Button Variants (NEW) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">2. Icon Button Variants</h2>
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-green-900 mb-2">Documentation:</h3>
          <p className="text-green-800 text-sm">
            Icon-only buttons are perfect for toolbars, action menus, and
            space-constrained interfaces. Choose the variant based on your
            visual hierarchy needs:
          </p>
          <ul className="list-disc list-inside text-green-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-green-100 px-1 rounded">icon</code> -
              Transparent background with hover effect, ideal for subtle actions
            </li>
            <li>
              <code className="bg-green-100 px-1 rounded">icon-filled</code> -
              Solid background, great for primary icon actions
            </li>
            <li>
              <code className="bg-green-100 px-1 rounded">icon-outlined</code> -
              Bordered style, good for secondary icon actions
            </li>
            <li>
              Use <code className="bg-green-100 px-1 rounded">tooltipText</code>{" "}
              to provide labels for accessibility
            </li>
            <li>
              Icon size can be controlled via{" "}
              <code className="bg-green-100 px-1 rounded">iconWidth</code>/
              <code className="bg-green-100 px-1 rounded">iconHeight</code>{" "}
              props
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Default Icon Button (icon)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Filled Icon Button (icon-filled)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon-filled"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Outlined Icon Button (icon-outlined)
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon-outlined"
                icon={<Settings size={20} />}
                tooltipText="Settings"
                color="primary"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Edit size={20} />}
                tooltipText="Edit"
                color="success"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Trash size={20} />}
                tooltipText="Delete"
                color="destructive"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<Copy size={20} />}
                tooltipText="Copy"
                color="neutral"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Different Sizes for Icon Buttons
            </h3>
            <div className="flex flex-wrap gap-4 items-center">
              <ButtonComponent
                variant="icon-filled"
                size="sm"
                icon={<Plus size={14} />}
                tooltipText="Small"
                color="primary"
              />
              <ButtonComponent
                variant="icon-filled"
                size="md"
                icon={<Plus size={18} />}
                tooltipText="Medium"
                color="primary"
              />
              <ButtonComponent
                variant="icon-filled"
                size="lg"
                icon={<Plus size={22} />}
                tooltipText="Large"
                color="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Color Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">3. Color Variants</h2>
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-purple-900 mb-2">Documentation:</h3>
          <p className="text-purple-800 text-sm">
            Color variants provide semantic meaning to buttons. Choose colors
            based on the action's importance and intent:
          </p>
          <ul className="list-disc list-inside text-purple-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-purple-100 px-1 rounded">primary</code> - Main
              actions, high emphasis (blue theme)
            </li>
            <li>
              <code className="bg-purple-100 px-1 rounded">success</code> -
              Positive actions like save, submit, approve (green theme)
            </li>
            <li>
              <code className="bg-purple-100 px-1 rounded">warning</code> -
              Cautionary actions that need attention (yellow theme)
            </li>
            <li>
              <code className="bg-purple-100 px-1 rounded">destructive</code> -
              Dangerous actions like delete, remove (red theme)
            </li>
            <li>
              <code className="bg-purple-100 px-1 rounded">neutral</code> -
              Neutral actions with less emphasis (gray theme)
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Primary"
            color="primary"
            icon={<Star size={16} />}
          />
          <ButtonComponent
            title="Success"
            color="success"
            icon={<Check size={16} />}
          />
          <ButtonComponent
            title="Warning"
            color="warning"
            icon={<AlertCircle size={16} />}
          />
          <ButtonComponent
            title="Destructive"
            color="destructive"
            icon={<Trash2 size={16} />}
          />
          <ButtonComponent
            title="Neutral"
            color="neutral"
            icon={<Bell size={16} />}
          />
        </div>
      </section>

      {/* Section 4: Icon Positions */}
      <section>
        <h2 className="text-2xl font-bold mb-4">4. Icon Positions</h2>
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-indigo-900 mb-2">Documentation:</h3>
          <p className="text-indigo-800 text-sm">
            Control the placement of icons relative to button text. Default
            position is "right".
          </p>
          <ul className="list-disc list-inside text-indigo-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-indigo-100 px-1 rounded">
                iconPosition="left"
              </code>{" "}
              - Icon appears before the text
            </li>
            <li>
              <code className="bg-indigo-100 px-1 rounded">
                iconPosition="right"
              </code>{" "}
              - Icon appears after the text (default)
            </li>
            <li>
              Use <code className="bg-indigo-100 px-1 rounded">iconWidth</code>{" "}
              and <code className="bg-indigo-100 px-1 rounded">iconHeight</code>{" "}
              to customize icon dimensions
            </li>
          </ul>
        </div>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              Basic Examples
            </h3>
            <div className="flex flex-wrap gap-4">
              <ButtonComponent
                title="Icon Left"
                iconPosition="left"
                icon={<ArrowLeft size={16} />}
                color="primary"
              />
              <ButtonComponent
                title="Icon Right"
                iconPosition="right"
                icon={<ArrowRight size={16} />}
                color="primary"
              />
              <ButtonComponent title="No Icon" icon={null} color="primary" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3 text-gray-700">
              All Variants with Icons
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <ButtonComponent
                title="Filled"
                variant="filled"
                iconPosition="left"
                icon={<Plus size={16} />}
              />
              <ButtonComponent
                title="Filled"
                variant="filled"
                iconPosition="right"
                icon={<Plus size={16} />}
              />
              <ButtonComponent
                title="Outlined"
                variant="outlined"
                iconPosition="left"
                icon={<Search size={16} />}
              />
              <ButtonComponent
                title="Outlined"
                variant="outlined"
                iconPosition="right"
                icon={<Search size={16} />}
              />
              <ButtonComponent
                title="Destructive"
                variant="destructive"
                iconPosition="left"
                icon={<Trash2 size={16} />}
              />
              <ButtonComponent
                title="Destructive"
                variant="destructive"
                iconPosition="right"
                icon={<Trash2 size={16} />}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Link Button Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">5. Link Button Examples</h2>
        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-cyan-900 mb-2">Documentation:</h3>
          <p className="text-cyan-800 text-sm">
            Link buttons render as actual{" "}
            <code className="bg-cyan-100 px-1 rounded">&lt;a&gt;</code> tags for
            navigation. They support all standard anchor attributes.
          </p>
          <ul className="list-disc list-inside text-cyan-800 text-sm mt-2 space-y-1">
            <li>
              Use <code className="bg-cyan-100 px-1 rounded">href</code> for
              navigation URL
            </li>
            <li>
              Use{" "}
              <code className="bg-cyan-100 px-1 rounded">target="_blank"</code>{" "}
              to open in new tab
            </li>
            <li>
              Use <code className="bg-cyan-100 px-1 rounded">download</code> for
              file downloads
            </li>
            <li>
              Supports email (
              <code className="bg-cyan-100 px-1 rounded">mailto:</code>) and
              phone (<code className="bg-cyan-100 px-1 rounded">tel:</code>)
              links
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Regular Link"
            variant="link"
            href="/dashboard"
            icon={<ExternalLink size={16} />}
          />
          <ButtonComponent
            title="Open in New Tab"
            variant="link"
            href="https://example.com"
            target="_blank"
            icon={<ExternalLink size={16} />}
            iconPosition="right"
          />
          <ButtonComponent
            title="Download Link"
            variant="link"
            href="/files/document.pdf"
            download
            icon={<Download size={16} />}
          />
          <ButtonComponent
            title="Email Link"
            variant="link"
            href="mailto:example@example.com"
            icon={<Mail size={16} />}
          />
          <ButtonComponent
            title="Phone Link"
            variant="link"
            href="tel:+1234567890"
            icon={<Phone size={16} />}
          />
        </div>
      </section>

      {/* Section 6: Border Radius Options */}
      <section>
        <h2 className="text-2xl font-bold mb-4">6. Border Radius Options</h2>
        <div className="bg-pink-50 border border-pink-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-pink-900 mb-2">Documentation:</h3>
          <p className="text-pink-800 text-sm">
            Control the roundness of button corners using the{" "}
            <code className="bg-pink-100 px-1 rounded">rounded</code> prop.
          </p>
          <ul className="list-disc list-inside text-pink-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-pink-100 px-1 rounded">none</code> - Square
              corners
            </li>
            <li>
              <code className="bg-pink-100 px-1 rounded">sm/md/lg/xl</code> -
              Increasing roundness
            </li>
            <li>
              <code className="bg-pink-100 px-1 rounded">full</code> - Pill
              shape (perfect for icon buttons)
            </li>
            <li>
              Use{" "}
              <code className="bg-pink-100 px-1 rounded">customRounded</code>{" "}
              for custom Tailwind classes
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent title="None" rounded="none" variant="outlined" />
          <ButtonComponent title="Small" rounded="sm" variant="outlined" />
          <ButtonComponent title="Medium" rounded="md" variant="outlined" />
          <ButtonComponent title="Large" rounded="lg" variant="outlined" />
          <ButtonComponent
            title="Extra Large"
            rounded="xl"
            variant="outlined"
          />
          <ButtonComponent
            title="Full/Pill"
            rounded="full"
            variant="outlined"
            icon={<Heart size={16} />}
          />
        </div>
      </section>

      {/* Section 7: Size Variants */}
      <section>
        <h2 className="text-2xl font-bold mb-4">7. Size Variants</h2>
        <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-orange-900 mb-2">Documentation:</h3>
          <p className="text-orange-800 text-sm">
            Adjust button size based on context and importance. Sizes scale
            padding, text, and icon dimensions.
          </p>
          <ul className="list-disc list-inside text-orange-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-orange-100 px-1 rounded">sm</code> - Small,
              compact buttons for dense interfaces
            </li>
            <li>
              <code className="bg-orange-100 px-1 rounded">md</code> - Medium,
              default size for most buttons
            </li>
            <li>
              <code className="bg-orange-100 px-1 rounded">lg</code> - Large,
              prominent buttons for primary actions
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center gap-4">
          <ButtonComponent title="Small" size="sm" icon={<Plus size={16} />} />
          <ButtonComponent title="Medium" size="md" icon={<Plus size={16} />} />
          <ButtonComponent title="Large" size="lg" icon={<Plus size={16} />} />
          <ButtonComponent
            size="sm"
            variant="icon-filled"
            icon={<Settings size={14} />}
            tooltipText="Small Icon"
          />
          <ButtonComponent
            size="md"
            variant="icon-filled"
            icon={<Settings size={18} />}
            tooltipText="Medium Icon"
          />
          <ButtonComponent
            size="lg"
            variant="icon-filled"
            icon={<Settings size={22} />}
            tooltipText="Large Icon"
          />
        </div>
      </section>

      {/* Section 8: Loading States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">8. Loading States</h2>
        <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-teal-900 mb-2">Documentation:</h3>
          <p className="text-teal-800 text-sm">
            Loading states provide visual feedback during async operations and
            prevent double submissions.
          </p>
          <ul className="list-disc list-inside text-teal-800 text-sm mt-2 space-y-1">
            <li>
              Set <code className="bg-teal-100 px-1 rounded">loading=true</code>{" "}
              to show spinner and disable button
            </li>
            <li>
              Use <code className="bg-teal-100 px-1 rounded">loadingText</code>{" "}
              to customize loading message
            </li>
            <li>
              Combine with{" "}
              <code className="bg-teal-100 px-1 rounded">submit=true</code> to
              prevent double form submission
            </li>
            <li>
              Use{" "}
              <code className="bg-teal-100 px-1 rounded">loadingComponent</code>{" "}
              for custom loading indicators
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Save"
            icon={<Save size={16} />}
            loading={isSaving}
            onClick={handleSave}
          />
          <ButtonComponent
            title="Delete"
            variant="destructive"
            color="destructive"
            icon={<Trash2 size={16} />}
            loading={isDeleting}
            loadingText="Deleting..."
            onClick={handleDelete}
          />
          <ButtonComponent
            title="Submit"
            variant="filled"
            color="success"
            icon={<Check size={16} />}
            loading={isSubmitting}
            loadingText="Submitting..."
            onClick={handleSubmit}
          />
          <ButtonComponent
            variant="icon-filled"
            icon={<RefreshCw size={16} />}
            loading={isRefreshing}
            onClick={handleRefresh}
            tooltipText="Refresh"
          />
          <ButtonComponent
            title="Upload"
            icon={<Upload size={16} />}
            loading={isUploading}
            loadingText="Uploading..."
            onClick={handleUpload}
            fullWidth
          />
        </div>
      </section>

      {/* Section 9: Full Width Buttons */}
      <section>
        <h2 className="text-2xl font-bold mb-4">9. Full Width Buttons</h2>
        <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-amber-900 mb-2">Documentation:</h3>
          <p className="text-amber-800 text-sm">
            Full width buttons span the entire container width, perfect for
            mobile layouts and form submissions.
          </p>
          <ul className="list-disc list-inside text-amber-800 text-sm mt-2 space-y-1">
            <li>
              Set{" "}
              <code className="bg-amber-100 px-1 rounded">fullWidth=true</code>{" "}
              to make button fill container
            </li>
            <li>Useful for responsive designs and mobile-first interfaces</li>
            <li>Works with all variants and sizes</li>
          </ul>
        </div>
        <div className="space-y-2">
          <ButtonComponent
            title="Full Width Button"
            fullWidth
            icon={<ShoppingCart size={16} />}
            iconPosition="left"
          />
          <ButtonComponent
            title="Full Width Destructive"
            fullWidth
            variant="destructive"
            color="destructive"
            icon={<Trash2 size={16} />}
            iconPosition="right"
          />
          <ButtonComponent
            title="Full Width Outlined"
            fullWidth
            variant="outlined"
            icon={<Download size={16} />}
            iconPosition="left"
          />
        </div>
      </section>

      {/* Section 10: Disabled States */}
      <section>
        <h2 className="text-2xl font-bold mb-4">10. Disabled States</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-gray-900 mb-2">Documentation:</h3>
          <p className="text-gray-800 text-sm">
            Disabled buttons indicate unavailable actions and prevent user
            interaction.
          </p>
          <ul className="list-disc list-inside text-gray-800 text-sm mt-2 space-y-1">
            <li>
              Set{" "}
              <code className="bg-gray-100 px-1 rounded">disabled=true</code> to
              disable button
            </li>
            <li>Disabled buttons have reduced opacity and no hover effects</li>
            <li>Use when conditions aren't met or actions are unavailable</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Disabled Filled"
            disabled
            icon={<Lock size={16} />}
          />
          <ButtonComponent
            title="Disabled Outlined"
            variant="outlined"
            disabled
            icon={<Lock size={16} />}
          />
          <ButtonComponent
            title="Disabled Destructive"
            variant="destructive"
            disabled
            icon={<Lock size={16} />}
          />
          <ButtonComponent
            variant="icon-filled"
            icon={<Lock size={16} />}
            disabled
            tooltipText="Disabled"
          />
        </div>
      </section>

      {/* Section 11: Tooltips */}
      <section>
        <h2 className="text-2xl font-bold mb-4">11. Tooltips</h2>
        <div className="bg-lime-50 border border-lime-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-lime-900 mb-2">Documentation:</h3>
          <p className="text-lime-800 text-sm">
            Tooltips provide additional context on hover/focus. Perfect for icon
            buttons and clarifying actions.
          </p>
          <ul className="list-disc list-inside text-lime-800 text-sm mt-2 space-y-1">
            <li>
              Use <code className="bg-lime-100 px-1 rounded">tooltipText</code>{" "}
              to set tooltip content
            </li>
            <li>
              Use <code className="bg-lime-100 px-1 rounded">tooltipSide</code>{" "}
              to control position (top, bottom, left, right)
            </li>
            <li>By default, tooltips only show on mobile devices</li>
            <li>
              Set{" "}
              <code className="bg-lime-100 px-1 rounded">
                showTooltipOnDesktop=true
              </code>{" "}
              for desktop visibility
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Hover for tooltip"
            tooltipText="This is a helpful tooltip message"
            icon={<MessageSquare size={16} />}
          />
          <ButtonComponent
            variant="icon-filled"
            icon={<Home size={18} />}
            tooltipText="Go to Homepage"
          />
          <ButtonComponent
            title="Custom Side"
            tooltipText="Tooltip on bottom"
            tooltipSide="bottom"
            icon={<Bell size={16} />}
          />
          <ButtonComponent
            title="Show on Desktop"
            tooltipText="Visible on all devices"
            showTooltipOnDesktop={true}
            icon={<Info size={16} />}
          />
        </div>
      </section>

      {/* Section 12: Text Visibility Options */}
      <section>
        <h2 className="text-2xl font-bold mb-4">12. Text Visibility Options</h2>
        <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-emerald-900 mb-2">
            Documentation:
          </h3>
          <p className="text-emerald-800 text-sm">
            Control button text visibility across different screen sizes for
            responsive design.
          </p>
          <ul className="list-disc list-inside text-emerald-800 text-sm mt-2 space-y-1">
            <li>
              <code className="bg-emerald-100 px-1 rounded">
                showTextOnMobile=true
              </code>{" "}
              (default) - Text visible on all screens
            </li>
            <li>
              <code className="bg-emerald-100 px-1 rounded">
                showTextOnMobile=false
              </code>{" "}
              - Text hidden below breakpoint
            </li>
            <li>
              <code className="bg-emerald-100 px-1 rounded">
                showTextOnSm=true
              </code>{" "}
              - Force text visibility on small screens
            </li>
            <li>
              <code className="bg-emerald-100 px-1 rounded">
                customMobileBreakpoint
              </code>{" "}
              - Change breakpoint (default "md")
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Default (show on all screens)"
            icon={<EyeOff size={16} />}
            iconPosition="left"
          />
          <ButtonComponent
            title="Hide on small screens"
            icon={<EyeOff size={16} />}
            showTextOnMobile={false}
            iconPosition="right"
          />
          <ButtonComponent
            title="Force show on small"
            icon={<EyeOff size={16} />}
            showTextOnSm={true}
            showTextOnMobile={false}
            iconPosition="left"
          />
          <ButtonComponent
            title="Custom breakpoint (md)"
            icon={<EyeOff size={16} />}
            showTextOnMobile={false}
            customMobileBreakpoint="md"
            iconPosition="right"
          />
        </div>
      </section>

      {/* Section 13: Submit Button (Form Integration) */}
      <section>
        <h2 className="text-2xl font-bold mb-4">
          13. Submit Button (Form Integration)
        </h2>
        <div className="bg-rose-50 border border-rose-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-rose-900 mb-2">Documentation:</h3>
          <p className="text-rose-800 text-sm">
            Submit buttons are specifically designed for form submission with
            built-in loading and prevention features.
          </p>
          <ul className="list-disc list-inside text-rose-800 text-sm mt-2 space-y-1">
            <li>
              Set <code className="bg-rose-100 px-1 rounded">submit=true</code>{" "}
              to enable form submission behavior
            </li>
            <li>
              Automatically prevents double submission when combined with{" "}
              <code className="bg-rose-100 px-1 rounded">loading</code>
            </li>
            <li>
              Use{" "}
              <code className="bg-rose-100 px-1 rounded">type="submit"</code>{" "}
              for proper form behavior
            </li>
          </ul>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="space-y-4 border rounded-lg p-6"
        >
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Message</label>
            <textarea
              className="w-full px-3 py-2 border rounded-lg"
              rows="3"
              placeholder="Enter your message"
            />
          </div>
          <ButtonComponent
            title="Submit Form"
            submit={true}
            type="submit"
            loading={isSubmitting}
            loadingText="Sending..."
            icon={<Send size={16} />}
            iconPosition="right"
            fullWidth
            size="lg"
          />
        </form>
      </section>

      {/* Section 14: Custom Styling Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">14. Custom Styling</h2>
        <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
          <h3 className="font-semibold text-slate-900 mb-2">Documentation:</h3>
          <p className="text-slate-800 text-sm">
            Extend button styles with custom CSS classes using the{" "}
            <code className="bg-slate-100 px-1 rounded">className</code> prop.
          </p>
          <ul className="list-disc list-inside text-slate-800 text-sm mt-2 space-y-1">
            <li>Add any Tailwind CSS classes for custom styling</li>
            <li>Classes are merged with existing button styles</li>
            <li>Use for custom shadows, borders, fonts, and animations</li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4">
          <ButtonComponent
            title="Custom Shadow"
            className="shadow-lg"
            icon={<Star size={16} />}
            iconPosition="left"
          />
          <ButtonComponent
            title="Custom Border"
            variant="outlined"
            className="border-2 border-dashed"
            icon={<LinkIcon size={16} />}
            iconPosition="right"
          />
          <ButtonComponent
            title="Custom Font"
            className="font-mono font-bold"
            icon={<FileText size={16} />}
            iconPosition="left"
          />
          <ButtonComponent
            title="Custom Animation"
            className="hover:scale-105 transition-transform"
            icon={<Zap size={16} />}
            iconPosition="right"
          />
        </div>
      </section>

      {/* Section 15: Real World Examples */}
      <section>
        <h2 className="text-2xl font-bold mb-4">15. Real World Examples</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Login Button */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Login Button</h3>
            <ButtonComponent
              title="Sign In"
              icon={<LogIn size={16} />}
              iconPosition="left"
              color="primary"
              fullWidth
            />
          </div>

          {/* Logout Button */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Logout Button</h3>
            <ButtonComponent
              title="Sign Out"
              variant="outlined"
              icon={<LogOut size={16} />}
              iconPosition="left"
              color="destructive"
              fullWidth
            />
          </div>

          {/* Action Toolbar */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Action Toolbar</h3>
            <div className="flex gap-2">
              <ButtonComponent
                variant="icon"
                icon={<Edit size={18} />}
                tooltipText="Edit"
                color="primary"
              />
              <ButtonComponent
                variant="icon"
                icon={<Copy size={18} />}
                tooltipText="Copy"
                color="neutral"
              />
              <ButtonComponent
                variant="icon"
                icon={<Trash2 size={18} />}
                tooltipText="Delete"
                color="destructive"
              />
            </div>
          </div>

          {/* File Upload */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">File Upload</h3>
            <ButtonComponent
              title="Upload Photo"
              icon={<Camera size={16} />}
              iconPosition="left"
              variant="filled"
              color="success"
              fullWidth
            />
          </div>

          {/* Navigation Links */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Navigation</h3>
            <div className="space-y-2">
              <ButtonComponent
                title="Go to Dashboard"
                variant="link"
                href="/dashboard"
                icon={<ArrowRight size={14} />}
                iconPosition="right"
                color="primary"
                fullWidth
              />
              <ButtonComponent
                title="View Profile"
                variant="link"
                href="/profile"
                icon={<User size={14} />}
                iconPosition="right"
                color="neutral"
                fullWidth
              />
            </div>
          </div>

          {/* Pagination */}
          <div className="border rounded-lg p-4">
            <h3 className="font-semibold mb-3">Pagination</h3>
            <div className="flex gap-2 justify-center">
              <ButtonComponent
                variant="icon-outlined"
                icon={<ChevronLeft size={16} />}
                tooltipText="Previous"
                color="primary"
              />
              <ButtonComponent
                variant="icon-filled"
                icon={<span className="text-sm">1</span>}
                tooltipText="Page 1"
                color="primary"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<span className="text-sm">2</span>}
                tooltipText="Page 2"
                color="primary"
              />
              <ButtonComponent
                variant="icon-outlined"
                icon={<ChevronRight size={16} />}
                tooltipText="Next"
                color="primary"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info Note */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
        <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
          <Info size={18} />
          Complete API Reference:
        </h3>
        <div className="text-blue-800 text-sm space-y-2">
          <div>
            <strong>Required Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>title</code> - Button text content
              </li>
            </ul>
          </div>
          <div>
            <strong>Variants:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>
                  filled, outlined, flat, destructive, reject, link, icon,
                  icon-filled, icon-outlined
                </code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Colors:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>primary, success, warning, destructive, neutral</code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Sizes:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>sm, md, lg</code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Icon Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>icon, iconPosition, iconWidth, iconHeight</code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Behavior Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>
                  disabled, loading, loadingText, submit, onClick, type
                </code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Link Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>href, target, rel, download</code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Tooltip Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>
                  tooltipText, tooltipSide, showTooltipOnMobile,
                  showTooltipOnDesktop
                </code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Styling Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>className, fullWidth, rounded, customRounded</code>
              </li>
            </ul>
          </div>
          <div>
            <strong>Text Visibility Props:</strong>
            <ul className="list-disc list-inside ml-4">
              <li>
                <code>
                  showTextOnMobile, showTextOnSm, customMobileBreakpoint
                </code>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ButtonExamples;
