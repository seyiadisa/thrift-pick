import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons"
import { faHandHoldingHeart } from "@fortawesome/free-solid-svg-icons"
import "./Footer.css";

export default function Footer() {
	return (
		<footer>
			<div className="flex justify-between text-white px-32 py-12">
				<div className="flex flex-col gap-y-3">
					<p className="text-xl">Hi Thrifters!</p>
					<p className="text-3xl">Need Help?</p>
					<p className="flex items-center gap-x-3">
						<FontAwesomeIcon icon={faHandHoldingHeart} className="fa-sm text-black bg-white rounded-full p-3.5" />
						<span className="yellow text-xl">Contact our customer care</span>
					</p>
				</div>
				<div className="flex flex-col gap-y-6">
					<p className="text-3xl self-center">Thrift<span className="yellow">Pick</span></p>
					<div className="flex gap-x-14">
						<FontAwesomeIcon icon={faInstagram} className="fa-2xl" />
						<FontAwesomeIcon icon={faTwitter} className="fa-2xl" />
						<FontAwesomeIcon icon={faTiktok} className="fa-2xl" />
					</div>
				</div>
			</div>
			<div className="px-32 pt-16 pb-4">
				<div className="flex gap-x-20">
					<div>
						<p className="title">Categories</p>
						<p>Women</p>
						<p>Men</p>
						<p>Kids</p>
						<p>Plus Size</p>
						<p>Accessories</p>
						<p>Occasion</p>
						<p>Trending</p>
						<p>Sales</p>
					</div>
					<div>
						<p className="title">Top Brands</p>
						<p>Burberry</p>
						<p>Dr. Martens</p>
						<p>Mui mui</p>
						<p>Reformation</p>
						<p>Chanel</p>
						<p>Hermes</p>
						<p>Armani</p>
						<p>Prada</p>
					</div>
					<div>
						<p className="title">About Us</p>
						<p>Careers</p>
						<p>Mission</p>
						<p>Vision</p>
						<p>Our Impact</p>
						<p>FAQ</p>
						<p>Return Policy</p>
						<p>Terms of Use</p>
						<p>Privacy Policy</p>
						<p>Accessibility</p>
					</div>
				</div>
				<hr className="my-6" />
				<p className="copyright text-center text-sm">
					All items are pre-owned and consigned to ThriftPick. Trademarks are owned by their respective brand owners. No brand owner endorses or sponsors this ad or has any association and/or affiliation with ThriftPick.
				</p>
			</div>
		</footer>
	)
}