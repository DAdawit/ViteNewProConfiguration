import { MapPin } from "lucide-react"
import { cn } from "../../lib/utils"

/**
 * Location chip with map pin icon
 * @param {Object} props
 * @param {string} props.location - Location name
 * @param {boolean} props.readOnly - Whether chip is read-only
 * @param {Function} props.onClick - Click handler for editable chips
 * @param {string} props.className - Additional CSS classes
 */
const MapLocationChip = ({ location, readOnly = false, onClick, className, ...props }) => {
  const Component = readOnly ? "div" : "button"

  return (
    <Component
      className={cn(
        "flex w-full items-center gap-2 rounded-md border border-neutral-300 bg-white px-3 py-2 text-sm",
        !readOnly && "hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-primary cursor-pointer",
        className,
      )}
      onClick={!readOnly ? onClick : undefined}
      type={!readOnly ? "button" : undefined}
      {...props}
    >
      <MapPin className="h-4 w-4 text-neutral-500" />
      <span className="text-neutral-700">{location}</span>
    </Component>
  )
}
MapLocationChip.displayName = "MapLocationChip"

export { MapLocationChip }
