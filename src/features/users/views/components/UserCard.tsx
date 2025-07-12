import IconMail from "@/shared/icons/IconMail";
import IconPeople from "@/shared/icons/IconPeople";
import type { UserProps } from "@/features/users/types/IUser";
import ContactItem from "@/features/users/views/components/ContactItem";
import IconLink from "@/shared/icons/IconLink";
import Icon from "@/shared/views/components/common/Icon";

function UserCard({ user }: UserProps) {
  return (
    <article
      aria-labelledby={`user-${user.id}-name`}
      className="max-w-md w-full p-6 border border-gray-200 dark:border-gray-600 rounded-4xl shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800"
    >
      <div className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-4 sm:space-y-0">
        <div className="flex-1">
          <h3 id={`user-${user.id}-name`}>{user.name}</h3>
          <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>

          <div className="mt-4 space-y-2">
            <ContactItem icon={<Icon icon={IconMail} />} text={user.email} />
            <ContactItem icon={<Icon icon={IconPeople} />} text={user.phone} />
            <ContactItem
              icon={<Icon icon={IconLink} />}
              text={
                <a
                  href={`https://${user.website}`}
                  draggable={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {user.website}
                </a>
              }
            />
          </div>

          <address className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
            <h4>Address</h4>
            <p className="text-gray-600 dark:text-gray-400">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </address>

          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
            <h4>Company</h4>
            <p className="text-gray-800 dark:text-gray-200 font-medium">
              {user.company.name}
            </p>
            <p className="text-gray-600 dark:text-gray-400 italic">
              "{user.company.catchPhrase}"
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              {user.company.bs}
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

export default UserCard;
