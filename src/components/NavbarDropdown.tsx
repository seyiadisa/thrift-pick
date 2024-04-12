import { DropdownMenu, DropdownItem, DropdownSection } from "@nextui-org/react"
import "./NavbarDropdown.css"

export default function NavbarDropdown() {
	return (
		<>
			<DropdownMenu classNames={{ list: "flex flex-row px-5" }}>
				<DropdownSection className="nav-dropdown-section">
					<DropdownItem key="" classNames={{
						title: "dropdown-item-header",
					}}>Pieces</DropdownItem>
					<DropdownItem key="">Dresses</DropdownItem>
					<DropdownItem key="">Shoes</DropdownItem>
					<DropdownItem key="">Tops</DropdownItem>
					<DropdownItem key="">Bottoms</DropdownItem>
					<DropdownItem key="">Hoodies</DropdownItem>
					<DropdownItem key="">Jackets</DropdownItem>
				</DropdownSection>

				<DropdownSection className="nav-dropdown-section">
					<DropdownItem key="" classNames={{
						title: "dropdown-item-header",
					}}>Accessories</DropdownItem>
					<DropdownItem key="">Handbags</DropdownItem>
					<DropdownItem key="">Glasses</DropdownItem>
					<DropdownItem key="">Purses</DropdownItem>
					<DropdownItem key="">Hats</DropdownItem>
					<DropdownItem key="">Belts</DropdownItem>
					<DropdownItem key="">Necklaces</DropdownItem>
					<DropdownItem key="">Watches</DropdownItem>
				</DropdownSection>

				<DropdownSection className="nav-dropdown-section">
					<DropdownItem key="" classNames={{
						title: "dropdown-item-header",
					}}>Occassion/Event</DropdownItem>
					<DropdownItem key="">Wedding</DropdownItem>
					<DropdownItem key="">Swimwear</DropdownItem>
					<DropdownItem key="">Corporate</DropdownItem>
					<DropdownItem key="">Halloween</DropdownItem>
					<DropdownItem key="">Christmas</DropdownItem>
				</DropdownSection>

				<DropdownSection className="nav-dropdown-section">
					<DropdownItem key="" classNames={{
						title: "dropdown-item-header",
					}}>Brands</DropdownItem>
					<DropdownItem key="">Chanel</DropdownItem>
					<DropdownItem key="">Burberry</DropdownItem>
					<DropdownItem key="">Armani</DropdownItem>
					<DropdownItem key="">Louis Vuitton</DropdownItem>
					<DropdownItem key="">Prada</DropdownItem>
					<DropdownItem key="">Saint Lauren</DropdownItem>
					<DropdownItem key="">Hermes</DropdownItem>
				</DropdownSection>

				<DropdownSection className="nav-dropdown-section">
					<DropdownItem key="" classNames={{
						title: "dropdown-item-header",
					}}>Materials</DropdownItem>
					<DropdownItem key="">Rubber</DropdownItem>
					<DropdownItem key="">Spandex</DropdownItem>
					<DropdownItem key="">Fur</DropdownItem>
					<DropdownItem key="">Leather</DropdownItem>
					<DropdownItem key="">Polyester</DropdownItem>
					<DropdownItem key="">Cotton</DropdownItem>
					<DropdownItem key="">Crotchet</DropdownItem>
					<DropdownItem key="">Knitted</DropdownItem>
				</DropdownSection>
			</DropdownMenu>
		</>
	)
}