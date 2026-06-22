import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const UserBadge = ({
  name,
  organization,
  avatarSrc,
  position,
  mode = "normal",
  path,
  className,
}) => {
  return (
    <div className="flex flex-col custom-gap-10">
      <div className="flex items-center custom-gap-12">
        <Avatar className="w-10 h-10 rounded-lg">
          <AvatarImage
            className={"rounded-full object-cover"}
            src={`${
              import.meta.env.VITE_APP_BACKEND_IMAGES
            }/${path}/${avatarSrc}`}
            alt={name}
          />
          <AvatarFallback
            className={`rounded-full text-neutral-900 dark:text-neutral-100 bg-neutral-200 dark:bg-neutral-800`}
          >
            {name?.[0]}
          </AvatarFallback>
        </Avatar>
        <div className="flex-1 text-left leading-tight">
          <h1 className={`w-max whitespace-nowrap ${className}`}>{name}</h1>
          <div className={`text-neutral-600  flex gap-1 items-center`}>
            <h1 className="text-xs md:text-sm font-normal leading-[160%] ">
              {position}
            </h1>

            <h1 className={`text-xs md:text-sm  font-normal leading-[160%]`}>
              {organization}
            </h1>
          </div>
        </div>
      </div>
      {mode === "popup" && (
        <Badge
          variant="secondary"
          className="bg-neutral-100  text-primary-darkest  px-2 py-1 text-xs md:text-[16px] flex items-center gap-1"
        >
          {organization}
        </Badge>
      )}
    </div>
  );
};

export default UserBadge;
