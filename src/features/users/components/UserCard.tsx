import IconLink from "../../../shared/icons/IconLink";
import IconMail from "../../../shared/icons/IconMail";
import IconPhone from "../../../shared/icons/IconPhone";
import type { UserCardProps } from "../../../shared/types/IUser";

function UserCard({ user }: UserCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white max-w-md">
      <div className="flex items-start space-x-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-800">{user.name}</h3>
          <p className="text-gray-500">@{user.username}</p>

          <div className="mt-4 space-y-2">
            <p className="text-gray-600 flex items-center gap-2">
              <IconMail />
              {user.email}
            </p>

            <p className="text-gray-600 flex items-center gap-2">
              <IconPhone />
              {user.phone}
            </p>

            <p className="text-gray-600 flex items-center gap-2">
              <IconLink />
              <a
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 hover:underline"
              >
                {user.website}
              </a>
            </p>
          </div>

          <div className="mt-4 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-700">Address</h4>
            <p className="text-gray-600">
              {user.address.street}, {user.address.suite}
              <br />
              {user.address.city}, {user.address.zipcode}
            </p>
            <p className="text-sm text-gray-500 mt-1">
              Coordinates: {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>

          <div className="mt-3 p-3 bg-gray-50 rounded-lg">
            <h4 className="font-medium text-gray-700">Company</h4>
            <p className="text-gray-800 font-medium">{user.company.name}</p>
            <p className="text-gray-600 italic">"{user.company.catchPhrase}"</p>
            <p className="text-sm text-gray-500 mt-1">{user.company.bs}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCard;
