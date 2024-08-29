import React from 'react';

function Profile() {
  return (
    <div className="container my-5">
      <div className="row">
        {/* Basic Profile Card */}
        <div className="col-xl-4">
          <div className="card">
            <div className="card-body text-center d-flex flex-column align-items-center">
              <img
                src="https://via.placeholder.com/150"
                alt="Profile"
                className="rounded-circle mb-3"
                style={{ width: '150px', height: '150px' }}
              />
              <h2 className="fs-2  mb-2">Kevin Anderson</h2>
              <h3 className="fs-4 text-muted mb-3">Web Designer</h3>
              <div className="social-links mt-2">
                <a href="#" className="me-2 text-decoration-none"><i className="bi bi-twitter"></i></a>
                <a href="#" className="me-2 text-decoration-none"><i className="bi bi-facebook"></i></a>
                <a href="#" className="me-2 text-decoration-none"><i className="bi bi-instagram"></i></a>
                <a href="#" className="text-decoration-none"><i className="bi bi-linkedin"></i></a>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Options Card */}
        <div className="col-xl-8">
          <div className="card">
            <div className="card-body">
              {/* Tabs Navigation */}
              <ul className="nav nav-tabs" id="profileTabs" role="tablist">
                <li className="nav-item" role="presentation">
                  <a className="nav-link active" id="overview-tab" data-bs-toggle="tab" href="#profile-overview" role="tab" aria-controls="profile-overview" aria-selected="true">Overview</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="edit-tab" data-bs-toggle="tab" href="#profile-edit" role="tab" aria-controls="profile-edit" aria-selected="false">Edit Profile</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="settings-tab" data-bs-toggle="tab" href="#profile-settings" role="tab" aria-controls="profile-settings" aria-selected="false">Settings</a>
                </li>
                <li className="nav-item" role="presentation">
                  <a className="nav-link" id="change-password-tab" data-bs-toggle="tab" href="#profile-change-password" role="tab" aria-controls="profile-change-password" aria-selected="false">Change Password</a>
                </li>
              </ul>

              {/* Tabs Content */}
              <div className="tab-content pt-3" id="profileTabsContent">
                {/* Overview Tab */}
                <div className="tab-pane fade show active" id="profile-overview" role="tabpanel" aria-labelledby="overview-tab">
                  <h5 className="fs-4  mb-3">About</h5>
                  <p className="small fst-italic mb-4">
                    Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.
                  </p>

                  <h5 className="fs-4  mb-3">Profile Details</h5>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4 ">Full Name</div>
                    <div className="col-lg-9 col-md-8">Kevin Anderson</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Company</div>
                    <div className="col-lg-9 col-md-8">Lueilwitz, Wisoky and Leuschke</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Job</div>
                    <div className="col-lg-9 col-md-8">Web Designer</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Country</div>
                    <div className="col-lg-9 col-md-8">USA</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Address</div>
                    <div className="col-lg-9 col-md-8">A108 Adam Street, New York, NY 535022</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Phone</div>
                    <div className="col-lg-9 col-md-8">(436) 486-3538 x29071</div>
                  </div>
                  <div className="row mb-2">
                    <div className="col-lg-3 col-md-4">Email</div>
                    <div className="col-lg-9 col-md-8">k.anderson@example.com</div>
                  </div>
                </div>

                {/* Edit Profile Tab */}
                <div className="tab-pane fade" id="profile-edit" role="tabpanel" aria-labelledby="edit-tab">
                  <form>
                    <div className="mb-3 row">
                      <label htmlFor="profileImage" className="col-md-4 col-form-label">Profile Image</label>
                      <div className="col-md-8">
                        <img src="https://via.placeholder.com/150" alt="Profile" className="img-thumbnail mb-2" />
                        <div>
                          <a href="#" className="btn btn-primary btn-sm me-2" title="Upload new profile image"><i className="bi bi-upload"></i></a>
                          <a href="#" className="btn btn-danger btn-sm" title="Remove my profile image"><i className="bi bi-trash"></i></a>
                        </div>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="fullName" className="col-md-4 col-form-label">Full Name</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="fullName" defaultValue="Kevin Anderson" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="about" className="col-md-4 col-form-label">About</label>
                      <div className="col-md-8">
                        <textarea className="form-control" id="about" style={{ height: '100px' }} defaultValue="Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde." />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="company" className="col-md-4 col-form-label">Company</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="company" defaultValue="Lueilwitz, Wisoky and Leuschke" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="Job" className="col-md-4 col-form-label">Job</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="Job" defaultValue="Web Designer" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="Country" className="col-md-4 col-form-label">Country</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="Country" defaultValue="USA" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="Address" className="col-md-4 col-form-label">Address</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="Address" defaultValue="A108 Adam Street, New York, NY 535022" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="Phone" className="col-md-4 col-form-label">Phone</label>
                      <div className="col-md-8">
                        <input type="text" className="form-control" id="Phone" defaultValue="(436) 486-3538 x29071" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="Email" className="col-md-4 col-form-label">Email</label>
                      <div className="col-md-8">
                        <input type="email" className="form-control" id="Email" defaultValue="k.anderson@example.com" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Save Changes</button>
                  </form>
                </div>

                {/* Settings Tab */}
                <div className="tab-pane fade" id="profile-settings" role="tabpanel" aria-labelledby="settings-tab">
                  <h5 className="fs-4 fw-bold mb-3">Settings</h5>
                  <form>
                    <div className="mb-3 row">
                      <label htmlFor="timezone" className="col-md-4 col-form-label">Timezone</label>
                      <div className="col-md-8">
                        <select className="form-select" id="timezone">
                          <option value="UTC">UTC</option>
                          <option value="GMT">GMT</option>
                          <option value="PST">PST</option>
                          <option value="EST">EST</option>
                          {/* Add more options as needed */}
                        </select>
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="notifications" className="col-md-4 col-form-label">Email Notifications</label>
                      <div className="col-md-8">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" id="notifications" />
                          <label className="form-check-label" htmlFor="notifications">Receive email notifications</label>
                        </div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Save Settings</button>
                  </form>
                </div>

                {/* Change Password Tab */}
                <div className="tab-pane fade" id="profile-change-password" role="tabpanel" aria-labelledby="change-password-tab">
                  <h5 className="fs-4 fw-bold mb-3">Change Password</h5>
                  <form>
                    <div className="mb-3 row">
                      <label htmlFor="currentPassword" className="col-md-4 col-form-label">Current Password</label>
                      <div className="col-md-8">
                        <input type="password" className="form-control" id="currentPassword" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="newPassword" className="col-md-4 col-form-label">New Password</label>
                      <div className="col-md-8">
                        <input type="password" className="form-control" id="newPassword" />
                      </div>
                    </div>
                    <div className="mb-3 row">
                      <label htmlFor="confirmPassword" className="col-md-4 col-form-label">Confirm New Password</label>
                      <div className="col-md-8">
                        <input type="password" className="form-control" id="confirmPassword" />
                      </div>
                    </div>
                    <button type="submit" className="btn btn-primary btn-sm">Change Password</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
