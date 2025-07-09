import IconArrow from "@/shared/icons/IconArrow";
import IconArrowBold from "@/shared/icons/IconArrowBold";
import IconBuilding from "@/shared/icons/IconBuilding";
import IconBuildings from "@/shared/icons/IconBuildings";
import IconCalendar from "@/shared/icons/IconCalendar";
import IconCalendarNew from "@/shared/icons/IconCalendarNew";
import IconCloseCircle from "@/shared/icons/IconCloseCircle";
import IconCloseSquare from "@/shared/icons/IconCloseSquare";
import IconCode from "@/shared/icons/IconCode";
import IconInfo from "@/shared/icons/IconInfo";
import IconLink from "@/shared/icons/IconLink";
import IconLocation from "@/shared/icons/IconLocation";
import IconMail from "@/shared/icons/IconMail";
import IconMenu from "@/shared/icons/IconMenu";
import IconPeople from "@/shared/icons/IconPeople";
import IconProfile from "@/shared/icons/IconProfile";
import IconQuestion from "@/shared/icons/IconQuestion";
import IconSearch from "@/shared/icons/IconSearch";
import IconSort from "@/shared/icons/IconSort";
import IconStar from "@/shared/icons/IconStar";
import IconTag from "@/shared/icons/IconTag";
import IconTeacher from "@/shared/icons/IconTeacher";
import IconTickCircle from "@/shared/icons/IconTickCircle";
import IconUser from "@/shared/icons/IconUser";
import IconCard from "@/shared/views/components/common/IconCard";

function IconPage() {
  return (
    <div className="bg-[image:var(--gradient-primary)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 w-full rounded-3xl">
      <section
        aria-labelledby="welcome-title"
        className="max-w-xl sm:max-w-2xl w-full bg-[var(--color-bg)] rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center mx-2 sm:mx-0"
      >
        <h2 className="text-xl font-bold mb-6 text-[var(--color-text-primary)]">
          Available icons
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <IconCard icon={<IconArrow />} name="IconArrow" />
          <IconCard icon={<IconArrowBold />} name="IconArrowBold" />
          <IconCard icon={<IconBuilding />} name="IconBuilding" />
          <IconCard icon={<IconBuildings />} name="IconBuildings" />
          <IconCard icon={<IconCalendar />} name="IconCalendar" />
          <IconCard icon={<IconCalendarNew />} name="IconCalendarNew" />
          <IconCard icon={<IconCloseCircle />} name="IconCloseCircle" />
          <IconCard icon={<IconCloseSquare />} name="IconCloseSquare" />
          <IconCard icon={<IconCode />} name="IconCode" />
          <IconCard icon={<IconInfo />} name="IconInfo" />
          <IconCard icon={<IconLink />} name="IconLink" />
          <IconCard icon={<IconLocation />} name="IconLocation" />
          <IconCard icon={<IconMail />} name="IconMail" />
          <IconCard icon={<IconMenu />} name="IconMenu" />
          <IconCard icon={<IconPeople />} name="IconPeople" />
          <IconCard icon={<IconProfile />} name="IconProfile" />
          <IconCard icon={<IconQuestion />} name="IconQuestion" />
          <IconCard icon={<IconSearch />} name="IconSearch" />
          <IconCard icon={<IconSort />} name="IconSort" />
          <IconCard icon={<IconStar />} name="IconStar" />
          <IconCard icon={<IconTag />} name="IconTag" />
          <IconCard icon={<IconTeacher />} name="IconTeacher" />
          <IconCard icon={<IconTickCircle />} name="IconTickCircle" />
          <IconCard icon={<IconUser />} name="IconUser" />
        </div>
      </section>
    </div>
  );
}

export default IconPage;
