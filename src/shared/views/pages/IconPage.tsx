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
import Text from "@/shared/views/components/common/Text";
import Icon from "@/shared/views/components/common/Icon";

function IconPage() {
  return (
    <div className="bg-[image:var(--gradient-primary)] flex flex-col items-center justify-center p-4 sm:p-6 md:p-12 w-full rounded-3xl">
      <section
        aria-labelledby="welcome-title"
        className="max-w-xl sm:max-w-2xl w-full bg-[var(--color-bg)] rounded-xl shadow-lg p-6 sm:p-8 md:p-12 text-center mx-2 sm:mx-0"
      >
        <Text as="h2" className="mb-6">
          Available icons
        </Text>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <IconCard icon={<Icon icon={IconArrow} />} name="IconArrow" />
          <IconCard icon={<Icon icon={IconArrowBold} />} name="IconArrowBold" />
          <IconCard icon={<Icon icon={IconBuilding} />} name="IconBuilding" />
          <IconCard icon={<Icon icon={IconBuildings} />} name="IconBuildings" />
          <IconCard icon={<Icon icon={IconCalendar} />} name="IconCalendar" />
          <IconCard
            icon={<Icon icon={IconCalendarNew} />}
            name="IconCalendarNew"
          />
          <IconCard
            icon={<Icon icon={IconCloseCircle} />}
            name="IconCloseCircle"
          />
          <IconCard
            icon={<Icon icon={IconCloseSquare} />}
            name="IconCloseSquare"
          />
          <IconCard icon={<Icon icon={IconCode} />} name="IconCode" />
          <IconCard icon={<Icon icon={IconInfo} />} name="IconInfo" />
          <IconCard icon={<Icon icon={IconLink} />} name="IconLink" />
          <IconCard icon={<Icon icon={IconLocation} />} name="IconLocation" />
          <IconCard icon={<Icon icon={IconMail} />} name="IconMail" />
          <IconCard icon={<Icon icon={IconMenu} />} name="IconMenu" />
          <IconCard icon={<Icon icon={IconPeople} />} name="IconPeople" />
          <IconCard icon={<Icon icon={IconProfile} />} name="IconProfile" />
          <IconCard icon={<Icon icon={IconQuestion} />} name="IconQuestion" />
          <IconCard icon={<Icon icon={IconSearch} />} name="IconSearch" />
          <IconCard icon={<Icon icon={IconSort} />} name="IconSort" />
          <IconCard icon={<Icon icon={IconStar} />} name="IconStar" />
          <IconCard icon={<Icon icon={IconTag} />} name="IconTag" />
          <IconCard icon={<Icon icon={IconTeacher} />} name="IconTeacher" />
          <IconCard
            icon={<Icon icon={IconTickCircle} />}
            name="IconTickCircle"
          />
          <IconCard icon={<Icon icon={IconUser} />} name="IconUser" />
        </div>
      </section>
    </div>
  );
}

export default IconPage;
