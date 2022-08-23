const components = {};
components.homeScreen = `
<main>
      <div class="welcome">
        <div class="first-text">
              <span style="cursor:default;font-family: 'Lora', serif, cursive; color:#14464b; font-size:50px">Welcome To</span>
    
        </div>
        <span onclick="smoothScrollIntro()" class = 'discover'>
            Khám phá
        </span>
      </div>
      <div class = 'about'>
            <ul class = 'about_description'>
                        <li>Học liệu điện tử do chính học sinh lớp 12 thiết kế.</li>
                        <li>Kiến thức Toán - Văn - Anh - KHTN - KHXH được tổng hợp logic, chuyên nghiệp, bắt mắt, dễ nhớ, đã được thông qua kiểm duyệt của các thầy cô dày dặn kinh nghiệm trong nhà trường.</li>
                        <li>Kho đề phong phú, cập nhật liên tục. </li>
                        <li>Phương thức ôn luyện, luyện thi gần gũi, thuận tiện ở bất cứ đâu.</li>
            </ul>
      </div>

      <div class = 'mon_toan'>
            <div class="mon_toan_description">
                  <div>
                        <div>Kiến thức</div>
                        
                        <p>1. Tổng hợp kiến thức cơ bản trong sách giáo khoa</p>
                        <p>2. Tổng hợp các dạng bài và phương pháp giải</p>
                        <p>3. Đơn giản hoá kiến thức dưới dạng hình ảnh, sơ đồ tư duy, và sổ ghi chú</p>
                        
                  </div>
                  <div>
                        <div>Bài tập</div>
                        
                        <p>1. Được phân theo các dạng độc lập, kèm theo ví dụ và lời giải minh hoạ</p>
                        <p>2. Bài tập trắc nghiệm được sắp xếp theo mức độ từ dễ đến khó, kèm lời giải chi tiết</p>
                        
                  </div>
                  <div>
                        <div>Mẹo làm bài</div>
                        
                        <p>1. Mẹo làm bài theo phương thức trắc nghiệm</p>
                        <p>2. Mẹo làm bài tập hình học với hình không gian phức tạp</p>
                        <p>3. Mẹo ôn luyện và luyện thi sao cho có hiệu quả</p>
    
                  </div>
            </div>
            <img class = 'mon_toan_image' src="../img/girl2.png" alt="">
      </div>

      <div class = 'mon_van'>
            <img class = 'mon_van_image' src="../img/anh_mon_van.png" alt="">
            <ul class = 'mon_van_description'>
                  <li>Thẻ nhớ nhân vật độc đáo</li>
                  <li>Sơ đồ tư duy dễ hiểu</li>
                  <li>Tài liệu nâng cao, uy tín</li>
                  <li>Dàn ý chi tiết đầy đủ</li>
            </ul>
      </div>

      <div class = 'mon_anh'>
            <img class="mon_anh_image" src="../img/anh_mon_anh.png" alt="">
            <div class = 'mon_anh_flex'>
                  <p>Flashcard dễ nhớ</p>
                  <p>Từ vựng linh hoạt</p>
                  <p>Bài tập đa dạng</p>
                  <p>Theo sát bài học</p>
            </div>
      </div>

      <div class = 'KHTN'>
           <div class = 'KHTN_flex'>
                  <div> <span class="circle"></span> <span>Vật lí</span> </div>
                  <div> <span class="circle"></span> <span>Hoá học</span> </div>
                  <div> <span class="circle"></span> <span>Sinh học</span> </div>
           </div>
      </div>
      
      



</main>
  `
  components.playScreen = `
  <style>
        html,body{
            height: 100%;
            margin: 0
        }
        body{
            background-color: black;
            display: flex;
            align-items: center;
            justify-content: center;
            background-image: url("");
        }
        div#app{
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
        }
        canvas{
            border: 1px solid white
        }
    </style>
    <p id="score" style="color: white; font-size: 30px;">Use arrrow keys to move.</p>
    <p id="highestscore" style="color: white; font-size: 30px;">Good luck!!!</p>
    <canvas width = "400" height = "400" id="game"></canvas>
    <button id = "return">Return</button>
  `  

components.leaderBoard = `
    <main>
    <div class="wrapper">
      <div class="lboard_section">
        <div class="lboard_tabs">
          <div class="tabs">
            <ul>
              
              <li class="active" data-li="month">Greatest scores of all time</li>
              
            </ul>
          </div>
        </div>
    
        <div class="lboard_wrap">
          <div class="lboard_item month" style="display: block;">
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>1.</span> Dương</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 95%"></div>
                </div>
              </div>
              <div class="points">
                1195 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>2.</span>Johnson</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 85%"></div>
                </div>
              </div>
              <div class="points">
                1185 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>3.</span>Charles John</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 75%"></div>
                </div>
              </div>
              <div class="points">
                1160 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>4.</span>Scarlett Angela</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 65%"></div>
                </div>
              </div>
              <div class="points">
                1130 points
              </div>
            </div>
            <div class="lboard_mem">
              
              <div class="name_bar">
                <p><span>5.</span>Rosey</p>
                <div class="bar_wrap">
                  <div class="inner_bar" style="width: 55%"></div>
                </div>
              </div>
              <div class="points">
                1110 points
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    </main>
`  

components.helpScreen = `
    <main>
    <form class="help _form" action="">
      <h3>Contact Information</h3>
      <input class="input-field" type="text" placeholder="First Name">
      <input class="input-field" type="text" placeholder="Email Address">
      <p class="label">If you are under 13 years old, please provide your parent's email address</p>
      <input class="input-field" type="text" placeholder="Confirm Email Address">
      <input class="input-field" type="text" placeholder="Username">
      <h3>Issue Details</h3>
      <label for="">What device are you having the problem on?</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="PC" value="string:Pc">PC</option>
        <option label="Mac" value="string:Mac">Mac</option>
        <option label="Chromebook" value="string:Chromebook">Chromebook</option>
        <option label="iPhone" value="string:Iphone">iPhone</option>
        <option label="iPad" value="string:Ipad">iPad</option>
        <option label="Android Phone" value="string:AndroidPhone">Android Phone</option>
        <option label="Android Tablet" value="string:AndroidTablet">Android Tablet</option>
        <option label="Amazon Device" value="string:AmazonDevice">Amazon Device</option>
        <option label="Xbox" value="string:Xbox">Xbox</option>
      </select>
      <label for="">Type of help category</label>
      <select class="device-select" name="" id="">
        <option class="hidden" value selected="selected">Please Select...</option>
        <option label="Account Hacked or Can't Log in" value="object:30">Account Hacked or Can't Log in</option>
        <option label="Billing &amp; Payments" value="object:31">Billing &amp; Payments</option>
        <option label="Bug Report" value="object:32">Bug Report</option>
        <option label="DMCA" value="object:35">DMCA</option>
        <option label="Gift Card" value="object:37">Gift Card</option>
        <option label="How To" value="object:38">How To</option>
        <option label="Ideas &amp; Suggestions" value="object:39">Ideas &amp; Suggestions</option>
        <option label="Moderation" value="object:40">Moderation</option>
        <option label="User Safety Concern" value="object:43">User Safety Concern</option>
        <option label="Contests &amp; Events" value="object:44">Contests &amp; Events</option>
        <option label="Technical Support" value="object:45">Technical Support</option>
      </select>
      <label for="">Description of issue</label>
      <textarea name="message" id="" placeholder="Please describe the issue that you are facing. Include any relevant information like where the issue is occurring or the error message." rows="6"></textarea>
    </form>
    <div style="text-align: center;">
      <button>Submit</button>
    </div>
    </main>
`  