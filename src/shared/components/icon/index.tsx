import cartIco from "@/shared/assets/icons/header_cart.svg";
import heartIco from "@/shared/assets/icons/header_heart.svg";
import searchIco from "@/shared/assets/icons/search.svg";
import userIco from "@/shared/assets/icons/header_user.svg";
import closeIco from "@/shared/assets/icons/close.svg";

type IconName = "cart" | "heart" | "user" | "search" | "close";

interface IconProps {
  name: IconName;
}

const ICONS = {
  cart: cartIco,
  user: userIco,
  heart: heartIco,
  search: searchIco,
  close: closeIco,
};

const Icon = ({ name }: IconProps) => {
  const IconToRender = ICONS[name];

  return (
    <div>
      <img alt={ICONS[name]} src={IconToRender} />
    </div>
  );
};

export default Icon;
