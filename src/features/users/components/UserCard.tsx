import IconMail from "../../../shared/icons/IconMail";
import IconPhone from "../../../shared/icons/IconPhone";
import type { UserProps } from "../../../shared/interfaces/IUser";
import ContactItem from "./ContactItem";

function UserCard({ user }: UserProps) {
  return (
    <div className="p-6 border border-gray-200 dark:border-gray-600 rounded-4xl shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-gray-800 max-w-md">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">
            {user.name}
          </h3>
          <p className="text-gray-500 dark:text-gray-400">@{user.username}</p>

          <div className="mt-4 space-y-2">
            <ContactItem icon={<IconMail />} text={user.email} />
            <ContactItem icon={<IconPhone />} text={user.phone} />
            <ContactItem
              icon={<IconPhone />}
              text={
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-500 dark:hover:text-blue-400 hover:underline"
                >
                  {user.website}
                </a>
              }
            />
          </div>

          <div className="mt-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
            <h4 className="font-medium text-gray-700 dark:text-gray-300">
              Address
            </h4>
            <p className="text-gray-600 dark:text-gray-400">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>

          <div className="mt-3 p-3 bg-gray-50 dark:bg-gray-700 rounded-2xl">
            <h4 className="font-medium text-gray-700 dark:text-gray-300">
              Company
            </h4>
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
    </div>
  );
}

export default UserCard;
