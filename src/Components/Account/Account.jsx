import Breadcrumb from "../Breadcrumb/Breadcrumb"


const Account = () => {
  const breadcrumbitems=[
    {label:'Home',path:'/',active:false},
    {label:'My Account',path:'/account',active:true}
  ]
  return (
    <div className="account-container">
      <div className="breadcrumb-float breadcrumb-account">
        <Breadcrumb
        items={breadcrumbitems}/>
      </div>
    <div className="account-settings">
    <h3 className="manage-my-account">Manage My Account</h3>
    <ul className="manage-account">
      <li><h3>My Profile</h3></li>
      <li>Address Book.</li>
      <li>My Payment Options</li>
    </ul>
      <h3 className="my-order-h3">My Orders</h3>
    <ul className="my-order">
      <li>My Returns</li>
      <li>My Cancellations</li>
    </ul>
    <h3 className="my-whishlist">My WishList</h3>
    </div>
    <div className='myaccount'>
      <h3>Edit Your Profile</h3>
     <form>
      <div className="field-name">
      <div className="input-field">
      <label htmlFor="firstName">First Name</label><br />
      <input type="text" placeholder='Md' />
      </div>
      <div className="input-field">
      <label htmlFor="lastName">Last Name</label><br />
      <input type="text" placeholder='Rimel' />
      </div>
      </div>
      <div className="field-contact">
      <div className="input-field">
      <label htmlFor="email">Email</label><br />
      <input type="email" placeholder='rimel11H@gmail.com'  />
      </div>
      <div className="input-field">
      <label htmlFor="address">Address</label><br />
      <input type="text" placeholder='Kingston,5236,United State' />
      </div>
      </div>
      <div className="field-password">
      <div className="input-field">
      <label htmlFor="password">Password Changes</label><br />
      <input type="password" placeholder='Current Password' />
      <input type="password" placeholder='New Password' />
      <input type="password" placeholder='Confirm New Password' />
      </div>
      </div>
     </form>
     <div className="button-changes">
      <button className='cancel-change'>Cancel</button>
      <button className="save-changes">Save Changes</button>
     </div>
    </div>
    </div>
  )
}

export default Account
