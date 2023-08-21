

const customerHtmlCode = 
       `                    <div class="col-lg-8 ms-5">
       <div class="row">
         <div class="col-lg-12">
           <div class="card radius-10 Formcard">
             <div class="card-body">
               <form>
                   <div class="d-flex justify-content-between align-items-center mb-3">
                       <h6 class="mb-0">Edit Profile</h6>
                       <button class="btn settingbtn">Settings</button>
                     </div>
                    <!-- here i'm -->
                    <div class="row">
                       <div class="small-12 medium-2 large-2 columns">
                           <div class="circle">
                               <img class="profile_pic"
                                   src="https://t3.ftcdn.net/jpg/03/46/83/96/360_F_346839683_6nAPzbhpSkIpb8pmAwufkC7c5eD7wYws.jpg">
                           </div>
                           <div class="p-image">
                               <i class="fa fa-camera upload-button" (click)="onUploadButtonClick()"></i>
                               <input class="file-upload" type="file" accept="image/*" (change)="onFileChange($event)" #fileInput style="display:none" >
                           </div>
                       </div>
                   </div>

                    <!-- here i'm -->

                   <h6 class="mb-0 mt-4 text-secondary">USER INFORMATION</h6>
                   <hr>
                   <div class="row g-3">
                     <div class="col-6">
                        <label class="form-label text-secondary">Username</label>
                        <input type="text" class="form-control" value="@jhon">
                     </div>
                     <div class="col-6">
                      <label class="form-label text-secondary">Email address</label>
                      <input type="text" class="form-control" value="xyz@example.com">
                    </div>
                      <div class="col-6">
                        <label class="form-label text-secondary">First Name</label>
                        <input type="text" class="form-control" value="jhon">
                    </div>
                    <div class="col-6">
                        <label class="form-label text-secondary">Last Name</label>
                        <input type="text" class="form-control" value="">
                    </div>
                  </div>
                  <h6 class="mb-0 mt-4 text-secondary">Contact Information</h6>
                  <hr>
                  <div class="row g-3">
                   <div class="col-12">
                     <label class="form-label text-secondary">Address</label>
                     <input type="text" class="form-control" value="47-A, city name, United States">
                    </div>
                    <div class="col-6">
                       <label class="form-label text-secondary">City</label>
                       <input type="text" class="form-control" value="@jhon">
                    </div>
                    <div class="col-6">
                     <label class="form-label text-secondary">Country</label>
                     <input type="text" class="form-control" value="xyz@example.com">
                   </div>
                     <div class="col-6">
                       <label class="form-label text-secondary">Pin Code</label>
                       <input type="text" class="form-control" value="jhon">
                   </div>
                   <div class="col-6">
                       <label class="form-label text-secondary">Last Name</label>
                       <input type="text" class="form-control" value="Deo">
                   </div>
                   <div class="col-12">
                     <label class="form-label text-secondary">About Me</label>
                     <textarea class="form-control" rows="4" cols="4" placeholder="Describe yourself..."></textarea>
                    </div>
                   </div>
                   <div class="text-start mt-3">
                     <button type="button" class="btn px-4" style="background-color: #2ea963;color:white">Save Changes</button>
                   </div>
                   </form>
             </div>
           </div>
         </div>
       </div>
     </div>`


     module.exports={
        customerHtmlCode
         }