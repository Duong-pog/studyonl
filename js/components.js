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

      <div class = 'KHXH'>
            <div class="KHXH_content">
                  <div>
                        <span>Lịch sử</span>
                        <img src="../img/su_frame.png" alt="">
                  </div>
                  <div>
                        <span>Địa lí</span>
                        <img src="../img/dia_frame.png" alt="">
                  </div>
                  <div>
                        <span>GDCD</span>
                        <img src="../img/GDCD_frame.png" alt="">
                  </div>
            </div>
      </div>
      
      <div class="footer">
            <div class="bubbles">
                <div class="bubble" style="--size:3.9961575108757224rem; --distance:8.740639629099018rem; --position:8.790151288592018%; --time:3.651029150185063s; --delay:-3.4952975995848767s;"></div>
                <div class="bubble" style="--size:4.524638558989823rem; --distance:9.964862769862645rem; --position:53.46150770791756%; --time:2.508243371500253s; --delay:-2.4678888198830107s;"></div>
                <div class="bubble" style="--size:5.191770416976044rem; --distance:8.869128346861768rem; --position:10.955300428084357%; --time:3.8686488844160687s; --delay:-3.22889383813168s;"></div>
                <div class="bubble" style="--size:5.473810039819685rem; --distance:6.783017845841319rem; --position:13.660469718953653%; --time:2.897561650323596s; --delay:-3.082677084122567s;"></div>
                <div class="bubble" style="--size:3.3714965278086364rem; --distance:9.16606239965115rem; --position:14.520866350989095%; --time:2.7647041139981874s; --delay:-3.0132858280431045s;"></div>
                <div class="bubble" style="--size:5.3067470564512rem; --distance:7.9813109280003856rem; --position:96.62569979788931%; --time:2.0319601505488962s; --delay:-3.2720101571347504s;"></div>
                <div class="bubble" style="--size:5.126189438315582rem; --distance:9.106414638554618rem; --position:91.42205507501266%; --time:2.72699153018725s; --delay:-3.44117212767204s;"></div>
                <div class="bubble" style="--size:5.304954154318409rem; --distance:6.992396512063891rem; --position:95.15871670271325%; --time:3.1618102213162063s; --delay:-2.2566789066928656s;"></div>
                <div class="bubble" style="--size:5.247927419279021rem; --distance:6.562334442467044rem; --position:47.04017569187228%; --time:2.974559104418085s; --delay:-3.016819603297032s;"></div>
                <div class="bubble" style="--size:5.329798779467992rem; --distance:9.679242484772416rem; --position:3.644329101822507%; --time:2.334006508486044s; --delay:-2.01106268139854s;"></div>
                <div class="bubble" style="--size:5.685175300486819rem; --distance:6.255922307857742rem; --position:51.82705700239086%; --time:2.124110605346005s; --delay:-3.583488524941808s;"></div>
                <div class="bubble" style="--size:2.604050107109085rem; --distance:8.26354145417769rem; --position:89.8701352910378%; --time:3.4239788002485607s; --delay:-2.7674141011361306s;"></div>
                <div class="bubble" style="--size:4.521968582832732rem; --distance:8.383230857288872rem; --position:77.5292679542885%; --time:3.147713849785996s; --delay:-2.7005422220766087s;"></div>
                <div class="bubble" style="--size:3.0082752923837894rem; --distance:7.559151401553363rem; --position:30.122113418487146%; --time:2.593923444241759s; --delay:-2.566220840211163s;"></div>
                <div class="bubble" style="--size:4.179585723221561rem; --distance:6.451161324687168rem; --position:74.40986637854542%; --time:3.4938783898473664s; --delay:-2.5611792208406885s;"></div>
                <div class="bubble" style="--size:4.881482244539038rem; --distance:9.946149355173644rem; --position:91.736291793697%; --time:2.184753665736987s; --delay:-3.897677902484646s;"></div>
                <div class="bubble" style="--size:4.712185041666887rem; --distance:8.598468767930541rem; --position:-1.2277899575298878%; --time:2.147008832876477s; --delay:-2.529792392417061s;"></div>
                <div class="bubble" style="--size:5.39611889488311rem; --distance:8.21460203679797rem; --position:84.04345833914489%; --time:3.129254059914157s; --delay:-3.2133914873751745s;"></div>
                <div class="bubble" style="--size:2.577884761901081rem; --distance:6.078545918068001rem; --position:6.4917702038832115%; --time:2.6545763727675116s; --delay:-2.460465538806867s;"></div>
                <div class="bubble" style="--size:3.2679272743129273rem; --distance:7.912129911982086rem; --position:72.1586281858506%; --time:2.868503249114305s; --delay:-2.822830131192764s;"></div>
                <div class="bubble" style="--size:4.212252877513835rem; --distance:6.45754526846519rem; --position:14.474040443002231%; --time:3.6689946406828717s; --delay:-3.2025350044679644s;"></div>
                <div class="bubble" style="--size:5.719063584286752rem; --distance:7.507460161254368rem; --position:63.60261054829141%; --time:2.6512648282180264s; --delay:-3.8332019209144526s;"></div>
                <div class="bubble" style="--size:2.962838419520291rem; --distance:9.460108776194794rem; --position:15.673450205446688%; --time:2.8592687850550935s; --delay:-2.2655967437872944s;"></div>
                <div class="bubble" style="--size:5.284456547751483rem; --distance:9.76160669971273rem; --position:71.9121160591086%; --time:3.5553628255983813s; --delay:-3.6238684004134654s;"></div>
                <div class="bubble" style="--size:4.450867451900564rem; --distance:8.55532595616899rem; --position:38.31879369254023%; --time:3.522022490896133s; --delay:-2.5690450508520017s;"></div>
                <div class="bubble" style="--size:2.5103524526206673rem; --distance:9.586121823615816rem; --position:67.88818676954381%; --time:2.0582297549927575s; --delay:-2.252676142854401s;"></div>
                <div class="bubble" style="--size:5.378007887069313rem; --distance:9.291906820713447rem; --position:95.5171204252849%; --time:2.560959455139784s; --delay:-2.9977259203694406s;"></div>
                <div class="bubble" style="--size:3.724669140007615rem; --distance:8.533240653495017rem; --position:18.988961946997453%; --time:3.801837790140418s; --delay:-3.5345809656282614s;"></div>
                <div class="bubble" style="--size:3.4311644906964434rem; --distance:9.376690998549286rem; --position:17.866431296623205%; --time:3.469988898389571s; --delay:-3.7197168665009848s;"></div>
                <div class="bubble" style="--size:2.0985610009653586rem; --distance:6.915808142726989rem; --position:47.465938379044744%; --time:2.5781374075688888s; --delay:-2.7785292451623054s;"></div>
                <div class="bubble" style="--size:2.821889931797962rem; --distance:8.316347008572293rem; --position:7.917149296369924%; --time:2.2665139810912747s; --delay:-3.2522183920746537s;"></div>
                <div class="bubble" style="--size:4.847362615974845rem; --distance:8.968726954510801rem; --position:85.59242406754122%; --time:2.7641501565425037s; --delay:-2.45548070347134s;"></div>
                <div class="bubble" style="--size:2.117501907105818rem; --distance:8.768813395845095rem; --position:74.88463480400644%; --time:2.224049348792724s; --delay:-2.3841451596801977s;"></div>
                <div class="bubble" style="--size:5.967673689885669rem; --distance:6.524698222646948rem; --position:90.21754632112938%; --time:3.080707183430249s; --delay:-3.638515120803392s;"></div>
                <div class="bubble" style="--size:3.6870308818050788rem; --distance:7.234786013639101rem; --position:31.575895420736728%; --time:2.7398462935043226s; --delay:-3.992982138610447s;"></div>
                <div class="bubble" style="--size:5.900087520844671rem; --distance:9.487089085723413rem; --position:86.76234299065021%; --time:3.825978967461352s; --delay:-2.7858315339609403s;"></div>
                <div class="bubble" style="--size:3.7425684382466846rem; --distance:6.45642618490134rem; --position:103.10630308795707%; --time:2.3633295969346726s; --delay:-3.8217213714672265s;"></div>
                <div class="bubble" style="--size:2.2031396826487697rem; --distance:6.491420260376118rem; --position:8.293942853958054%; --time:3.274139317297687s; --delay:-3.857974842383401s;"></div>
                <div class="bubble" style="--size:5.343675425698209rem; --distance:7.612382112285588rem; --position:1.5847267477724962%; --time:3.704138683399955s; --delay:-2.8119675392404124s;"></div>
                <div class="bubble" style="--size:2.6975026767788437rem; --distance:7.252470827911381rem; --position:46.73125173094293%; --time:3.0193430578408424s; --delay:-2.7280456192592513s;"></div>
                <div class="bubble" style="--size:2.9606823366116943rem; --distance:8.49715518877279rem; --position:61.18354849235398%; --time:3.4063443409559415s; --delay:-2.8419662171526268s;"></div>
                <div class="bubble" style="--size:3.5155628905053904rem; --distance:7.60196086343753rem; --position:89.22276437783206%; --time:3.7597189815154057s; --delay:-3.41047681773786s;"></div>
                <div class="bubble" style="--size:4.212040826960244rem; --distance:8.728736206387655rem; --position:-0.25043519872510345%; --time:2.5247230292457683s; --delay:-2.4501157866140413s;"></div>
                <div class="bubble" style="--size:5.797606247919174rem; --distance:9.07806065381762rem; --position:1.0437947366225986%; --time:3.2525046865787s; --delay:-2.158338958422957s;"></div>
                <div class="bubble" style="--size:2.7703659634250535rem; --distance:7.754664579912979rem; --position:99.250552318299%; --time:3.148333564568485s; --delay:-2.7703607110054707s;"></div>
                <div class="bubble" style="--size:2.9558018693648354rem; --distance:8.658643226313405rem; --position:57.345062805750466%; --time:2.679297072624003s; --delay:-2.614312538217094s;"></div>
                <div class="bubble" style="--size:3.9098793909180696rem; --distance:8.505981245975608rem; --position:60.590263460681825%; --time:2.8254102034391804s; --delay:-2.2214829748100353s;"></div>
                <div class="bubble" style="--size:3.898237728528545rem; --distance:9.769318856484471rem; --position:6.987866573726105%; --time:3.013758520683065s; --delay:-2.2561353993868307s;"></div>
                <div class="bubble" style="--size:3.0080913930368327rem; --distance:8.367611869786554rem; --position:91.73497477314844%; --time:2.6330333125116088s; --delay:-2.6789483788900825s;"></div>
                <div class="bubble" style="--size:2.237430112108724rem; --distance:7.234332127806996rem; --position:1.607118106606964%; --time:2.717566037806112s; --delay:-2.215198113768174s;"></div>
                <div class="bubble" style="--size:3.904449570342221rem; --distance:6.971855335605524rem; --position:57.538529885528895%; --time:3.366742135289526s; --delay:-3.0429107491081493s;"></div>
                <div class="bubble" style="--size:2.673870564786471rem; --distance:7.325475682580294rem; --position:102.03532314026714%; --time:3.6462725395849254s; --delay:-3.3187755170070465s;"></div>
                <div class="bubble" style="--size:2.7333333991316495rem; --distance:9.798903206379354rem; --position:60.960168761055%; --time:2.653442197490895s; --delay:-2.6093691660700378s;"></div>
                <div class="bubble" style="--size:2.472942829310689rem; --distance:9.863903352884495rem; --position:52.213719662846835%; --time:3.9272812650225934s; --delay:-3.418039267961684s;"></div>
                <div class="bubble" style="--size:2.431088135852278rem; --distance:8.846204325999565rem; --position:26.67256212091892%; --time:2.674993911741999s; --delay:-2.105259435873325s;"></div>
                <div class="bubble" style="--size:2.7923285545164207rem; --distance:8.864685313046493rem; --position:85.68194000043978%; --time:3.745581562815045s; --delay:-3.8838658307470855s;"></div>
                <div class="bubble" style="--size:3.7312089214211444rem; --distance:8.702765083092997rem; --position:62.005395719504946%; --time:2.119510941464725s; --delay:-2.191464793159348s;"></div>
                <div class="bubble" style="--size:4.573897696038327rem; --distance:6.945688487475345rem; --position:75.20405588854402%; --time:2.693162886978765s; --delay:-2.563845316173537s;"></div>
                <div class="bubble" style="--size:2.358822357632582rem; --distance:9.707797861820135rem; --position:-1.0298628554906863%; --time:3.864494095403965s; --delay:-2.374021239831415s;"></div>
                <div class="bubble" style="--size:3.0925371732160505rem; --distance:7.0002895187883425rem; --position:92.25111241041594%; --time:2.7147781785362137s; --delay:-2.2398389946720263s;"></div>
                <div class="bubble" style="--size:2.6915280400939574rem; --distance:9.46994634881745rem; --position:17.161764294452638%; --time:2.232042774747007s; --delay:-2.582049701946939s;"></div>
                <div class="bubble" style="--size:4.215193679487841rem; --distance:9.878821968070852rem; --position:84.03350714090956%; --time:2.1687078797921084s; --delay:-2.716106773374994s;"></div>
                <div class="bubble" style="--size:4.896410449289466rem; --distance:9.725365662217872rem; --position:61.07046948912921%; --time:3.06655239981415s; --delay:-3.2007948243588364s;"></div>
                <div class="bubble" style="--size:2.3963599361782784rem; --distance:8.205280806500053rem; --position:79.57806404335966%; --time:3.220284422652694s; --delay:-3.5481864500852733s;"></div>
                <div class="bubble" style="--size:4.913377226187277rem; --distance:9.02723395428761rem; --position:84.01529285020374%; --time:3.675192760343297s; --delay:-3.138423765207452s;"></div>
                <div class="bubble" style="--size:4.714330633031687rem; --distance:7.580208467570343rem; --position:79.6093088825578%; --time:2.3260916550338693s; --delay:-3.993465917637842s;"></div>
                <div class="bubble" style="--size:5.805716583534719rem; --distance:9.46677199267042rem; --position:101.57963658209201%; --time:2.4811935650739216s; --delay:-2.0239145220919967s;"></div>
                <div class="bubble" style="--size:3.6275293057628444rem; --distance:7.3279935118861435rem; --position:8.166446065765738%; --time:3.223952493586022s; --delay:-2.916035167228289s;"></div>
                <div class="bubble" style="--size:2.502979177707892rem; --distance:7.588760943836083rem; --position:76.31801805894305%; --time:2.5682069213758725s; --delay:-3.5798664686649384s;"></div>
                <div class="bubble" style="--size:3.354293264790087rem; --distance:7.762198411526478rem; --position:99.41541096022678%; --time:2.9786422238810575s; --delay:-2.8732828809991795s;"></div>
                <div class="bubble" style="--size:5.611030559234011rem; --distance:8.671524111462539rem; --position:-2.11594434106412%; --time:3.745154726484203s; --delay:-2.602555652118461s;"></div>
                <div class="bubble" style="--size:2.341058506762236rem; --distance:7.964991638794688rem; --position:67.73398197543138%; --time:2.1742267038593486s; --delay:-2.3118041985506848s;"></div>
                <div class="bubble" style="--size:4.177182068952535rem; --distance:7.856195379895824rem; --position:52.26375960447652%; --time:2.3245691899367253s; --delay:-2.9626602753702755s;"></div>
                <div class="bubble" style="--size:4.392517946050327rem; --distance:9.34360752972621rem; --position:47.56598991284775%; --time:3.743249998002073s; --delay:-3.6605881321937783s;"></div>
                <div class="bubble" style="--size:3.120286606471992rem; --distance:7.053314597034168rem; --position:60.02963345044181%; --time:3.297615872837303s; --delay:-2.597101804927486s;"></div>
                <div class="bubble" style="--size:2.8285350193277887rem; --distance:9.656300819330081rem; --position:-3.877487752349784%; --time:3.1592725487405198s; --delay:-2.870026344093303s;"></div>
                <div class="bubble" style="--size:5.147773359519673rem; --distance:8.705515405275111rem; --position:79.09276868647108%; --time:3.4948253201055692s; --delay:-3.7029101002056843s;"></div>
                <div class="bubble" style="--size:5.394013284888699rem; --distance:6.451759390815549rem; --position:3.570721251572053%; --time:3.3403018348034217s; --delay:-3.4503870027667887s;"></div>
                <div class="bubble" style="--size:2.4416842729391863rem; --distance:7.440758693671998rem; --position:82.51680017683007%; --time:2.1157618996532244s; --delay:-2.8307613573693367s;"></div>
                <div class="bubble" style="--size:2.1116144128875742rem; --distance:7.484279728586138rem; --position:102.44333629590244%; --time:2.5513109885057563s; --delay:-2.4118887261903663s;"></div>
                <div class="bubble" style="--size:5.444470730345147rem; --distance:9.139945567107883rem; --position:57.32551781904221%; --time:2.8765449913125245s; --delay:-3.2576647417356717s;"></div>
                <div class="bubble" style="--size:5.015077621202429rem; --distance:9.546763664011381rem; --position:35.94348952995884%; --time:3.6703828354076773s; --delay:-3.0802254683909687s;"></div>
                <div class="bubble" style="--size:2.394520891278879rem; --distance:9.3050771970096rem; --position:79.8260935300003%; --time:2.050838008924728s; --delay:-3.943551357072234s;"></div>
                <div class="bubble" style="--size:4.850444928119766rem; --distance:7.82668935184233rem; --position:80.56438236521647%; --time:2.6466507623441147s; --delay:-2.300814080421763s;"></div>
                <div class="bubble" style="--size:5.9788744652304215rem; --distance:9.284473437934544rem; --position:79.50172779373298%; --time:2.3624361091934074s; --delay:-3.6398740365831475s;"></div>
                <div class="bubble" style="--size:2.860401050330278rem; --distance:6.26502798126556rem; --position:35.60669447945658%; --time:3.4839954259992654s; --delay:-2.8227120733277724s;"></div>
                <div class="bubble" style="--size:3.236174873310844rem; --distance:7.267027600240622rem; --position:93.86532623913676%; --time:3.89324003954687s; --delay:-3.7219054178748214s;"></div>
                <div class="bubble" style="--size:4.300746316189795rem; --distance:8.568711242157766rem; --position:39.459678463179046%; --time:2.544450170060115s; --delay:-3.6214034382827975s;"></div>
                <div class="bubble" style="--size:3.8333454121560635rem; --distance:6.796008363702249rem; --position:15.389613515078693%; --time:2.0264857102952645s; --delay:-3.030158445050087s;"></div>
                <div class="bubble" style="--size:3.2666300864652476rem; --distance:6.985758747633051rem; --position:60.00200952325014%; --time:2.8723205998314776s; --delay:-2.950162054452975s;"></div>
                <div class="bubble" style="--size:2.468293211992818rem; --distance:7.844196574398084rem; --position:55.74065015165589%; --time:3.3103640944500925s; --delay:-2.1402218892069604s;"></div>
                <div class="bubble" style="--size:5.075806354307617rem; --distance:6.112430487022197rem; --position:71.84816225011583%; --time:3.2865643662109636s; --delay:-2.2000196128380733s;"></div>
                <div class="bubble" style="--size:2.357806048953078rem; --distance:8.527139035525341rem; --position:96.15003939094599%; --time:3.35495445850028s; --delay:-2.244750821365001s;"></div>
                <div class="bubble" style="--size:2.6547530216338178rem; --distance:8.830238110546015rem; --position:99.48474742146138%; --time:2.621678838140908s; --delay:-2.7728218718647955s;"></div>
                <div class="bubble" style="--size:2.4804001818850283rem; --distance:7.637685814136314rem; --position:61.35063069491221%; --time:2.677989159177852s; --delay:-2.0090643889680746s;"></div>
                <div class="bubble" style="--size:4.892997232787223rem; --distance:7.640177639137158rem; --position:62.57494603650049%; --time:2.8836265845514046s; --delay:-3.169484252025076s;"></div>
                <div class="bubble" style="--size:2.657512573058513rem; --distance:7.7486514156680375rem; --position:80.0932772993241%; --time:2.7138633604606s; --delay:-3.028007059136746s;"></div>
                <div class="bubble" style="--size:4.101005253824528rem; --distance:7.9594318727337345rem; --position:92.66336208187091%; --time:3.6520808463482046s; --delay:-2.2045734320491137s;"></div>
                <div class="bubble" style="--size:5.170101649553612rem; --distance:7.1763885533737035rem; --position:-4.551226464658078%; --time:2.461621151614735s; --delay:-3.6561853679623537s;"></div>
                <div class="bubble" style="--size:2.546766657540811rem; --distance:6.83791244894369rem; --position:25.730606882846704%; --time:3.8647133377751723s; --delay:-2.303350821130922s;"></div>
                <div class="bubble" style="--size:2.7077021099414607rem; --distance:8.286964702910442rem; --position:10.634598350439441%; --time:3.127557551884754s; --delay:-3.478767880679233s;"></div>
                <div class="bubble" style="--size:4.019306026688913rem; --distance:6.105958094326102rem; --position:20.517307643201846%; --time:3.243183287362691s; --delay:-2.8213240628953375s;"></div>
                <div class="bubble" style="--size:3.8884446897843885rem; --distance:6.2548165353037rem; --position:29.016492017296684%; --time:2.2515310042891636s; --delay:-3.755456342983026s;"></div>
                <div class="bubble" style="--size:5.5274258604957796rem; --distance:6.119479496060448rem; --position:93.50273864757739%; --time:2.0906295562250525s; --delay:-2.229297626757946s;"></div>
                <div class="bubble" style="--size:3.4645139192776853rem; --distance:9.748684255474195rem; --position:38.13018227037473%; --time:3.1718707368336974s; --delay:-3.965910444259825s;"></div>
                <div class="bubble" style="--size:4.309110636978652rem; --distance:9.520878570595553rem; --position:35.43418873953294%; --time:2.9304720837028158s; --delay:-2.0434363303321423s;"></div>
                <div class="bubble" style="--size:3.2871471065318687rem; --distance:9.415454174342212rem; --position:4.238918740722093%; --time:3.3613568258814923s; --delay:-2.94198841166462s;"></div>
                <div class="bubble" style="--size:5.609238237479369rem; --distance:6.97413855830995rem; --position:66.0917561139421%; --time:3.2598972864779006s; --delay:-2.4064379187233107s;"></div>
                <div class="bubble" style="--size:2.1887186045188836rem; --distance:6.646451982281959rem; --position:52.29385600019133%; --time:2.2423874615305994s; --delay:-3.2269303867230548s;"></div>
                <div class="bubble" style="--size:4.064208042002015rem; --distance:6.521970854024597rem; --position:35.45380330116198%; --time:3.4301738220294116s; --delay:-3.8714995446187688s;"></div>
                <div class="bubble" style="--size:2.9394609418427295rem; --distance:6.485907935916444rem; --position:11.25769531482847%; --time:3.115380693269821s; --delay:-2.4228774581071937s;"></div>
                <div class="bubble" style="--size:4.838413740136167rem; --distance:6.338698189976238rem; --position:27.515677364054596%; --time:3.959072266486297s; --delay:-2.8275093664609248s;"></div>
                <div class="bubble" style="--size:3.3937996814309166rem; --distance:6.356487821900204rem; --position:104.49736072247731%; --time:2.2873000621418744s; --delay:-2.58332981236286s;"></div>
                <div class="bubble" style="--size:5.4005025472529535rem; --distance:8.22658210535348rem; --position:37.499699963453125%; --time:2.4728247680947937s; --delay:-3.3291520963412196s;"></div>
                <div class="bubble" style="--size:2.692321171828219rem; --distance:6.313948427273388rem; --position:80.62114830200886%; --time:3.078675591642848s; --delay:-3.7706407755247624s;"></div>
                <div class="bubble" style="--size:3.7656026338938693rem; --distance:9.474496506195202rem; --position:36.44883023233244%; --time:3.24013331586588s; --delay:-2.258877359703819s;"></div>
                <div class="bubble" style="--size:5.259878970217528rem; --distance:6.4299134798417565rem; --position:57.32117518729149%; --time:2.39806240096211s; --delay:-2.4920429261454307s;"></div>
                <div class="bubble" style="--size:2.1043806274455026rem; --distance:7.456657121748713rem; --position:62.6708871689098%; --time:3.6986692186086065s; --delay:-3.372178297210671s;"></div>
                <div class="bubble" style="--size:2.301972101659384rem; --distance:6.725857530750723rem; --position:41.72865095067791%; --time:2.702382113158577s; --delay:-2.406471491910964s;"></div>
                <div class="bubble" style="--size:3.653079040674605rem; --distance:6.834528164265297rem; --position:10.575220802276192%; --time:3.513845399553718s; --delay:-3.7208829463901325s;"></div>
                <div class="bubble" style="--size:2.0595107643112867rem; --distance:7.1262882195848825rem; --position:80.14561188128208%; --time:3.0614149662473413s; --delay:-3.084947060022106s;"></div>
                <div class="bubble" style="--size:3.413265391144237rem; --distance:8.325130590033153rem; --position:98.21859084069902%; --time:3.7033943524068573s; --delay:-2.5294459853172238s;"></div>
                <div class="bubble" style="--size:4.417953974478205rem; --distance:9.236999076454207rem; --position:8.81578094630899%; --time:2.57882991908491s; --delay:-3.605913556874155s;"></div>
                <div class="bubble" style="--size:5.565005011280028rem; --distance:6.034208378928872rem; --position:9.269692371213601%; --time:2.2021859240659882s; --delay:-3.4443179369402595s;"></div>
                <div class="bubble" style="--size:2.3533943735528924rem; --distance:7.724075198333673rem; --position:101.21674321491929%; --time:2.436361952451183s; --delay:-3.0878232231666325s;"></div>
                <div class="bubble" style="--size:3.4012851217523323rem; --distance:8.18080346473507rem; --position:55.650694473275784%; --time:2.879991402934388s; --delay:-2.9110704745128486s;"></div>
                <div class="bubble" style="--size:2.630415045472592rem; --distance:6.47239220700293rem; --position:41.92918887655756%; --time:3.881914023246575s; --delay:-3.696001355317519s;"></div>
                <div class="bubble" style="--size:3.0118262343297477rem; --distance:9.274862900843976rem; --position:19.98986168963717%; --time:3.5977836020593137s; --delay:-2.732395093028702s;"></div>
            </div>
            <div class="content">
                <div>
                    <div><b>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit ipsa sed rerum perspiciatis eveniet ducimus saepe eius odit suscipit! Omnis vitae atque quia rem saepe ex, voluptas assumenda minima cumque</b></div>
                </div>
                <div><a class="image" href="https://codepen.io/z-" target="_blank" style="background-image: url('../img/logo.png')"></a>
                    <p>©2022 ELeMat</p>
                </div>
            </div>
        </div>
        
        <svg style="position:fixed; top:100vh">
            <defs>
                <filter id="blob">
                    <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="blob"></feColorMatrix>
                    <!--feComposite(in="SourceGraphic" in2="blob" operator="atop") //After reviewing this after years I can't remember why I added this but it isn't necessary for the blob effect-->
                </filter>
            </defs>
        </svg>
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