function ContactItem({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: React.ReactNode;
}) {
  return (
    <p className="text-gray-600 dark:text-gray-400 flex items-center gap-2">
      {icon}
      {text}
    </p>
  );
}

export default ContactItem;