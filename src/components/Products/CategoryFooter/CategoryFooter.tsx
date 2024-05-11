import "./CategoryFooter.scss"
const CategoryFooter = () => {
  return (
    <div className="categoryfooter">
        <ul>
            <li>About eBay</li>
            <li>Announcements</li>
            <li>Community</li>
            <li>Security Center</li>
            <li>Seller Center</li>
            <li>Policies</li>
            <li>Affiliates</li>
            <li>Help & Contact</li>
            <li>Site Map</li>
        </ul>
        <div className="categoryfooter__copyright">
            <strong>Copyright © 1995-2023 eBay Inc. All Rights Reserved.</strong>
            <ul>
                <li>Accessibility,</li>
                <li>User Agreement,</li>
                <li>Privacy,</li>
                <li>Payments Terms of Use,</li>
                <li>Cookies,</li>
                <li>Your Privacy Choices</li>
                <li>and AdChoice</li>
            </ul>
        </div>
    </div>
  )
}

export default CategoryFooter