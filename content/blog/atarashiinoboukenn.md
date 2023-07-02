---
title: 2023 年 5 月 轉職前端工程師回顧
publishedAt: June 25, 2023
description: 紀錄從 2022 年 8 月到 2023 年 5 月自學的過程以及求職面試時犯下的失誤。
---

## 自學歷程

私大法律學士，沒有任何程式經驗。2022 年 8 月開始看 Youtube 上彭彭的[網頁前端工程](https://www.youtube.com/playlist?list=PL-g0fdC5RMbqW54tWQPIVbhyl_Ky6a2VI)，中間有報名 [WeHelp Bootcamp](https://wehelp.tw/) 可惜沒有通過審核，考慮到其他 bootcamp、資策會的收費都比較高，就決定在 Udemy 上買 [Colt Steele](https://www.udemy.com/user/coltsteele/) 的課程開始自學。

跟著課程從頭認識 Web 開發的概念。當時的版本沒有 React（用 EJS 產生 HTML），除了中間某些章節難度突然提高（沒有介紹 Decorator 的概念就使用，當時花了很長的時間研究好像最終也沒搞懂 :sweat_smile:），對於想了解 Web 開發的新手還算是一門好課。

Web 入門之後對前端比較有興趣，就開始學 React，社群資源非常多，官方文件也很詳盡，剛好看到 [Anthony Sistilli](https://www.youtube.com/playlist?list=PLQg6GaokU5CyvExiaMgXP_BS5WWNBfZJN) 的入門就順順的看完了，[Dave Gray](https://www.youtube.com/@DaveGrayTeachesCode)、[Jack Herrington](https://www.youtube.com/@jherr) 的教學也都非常不錯。

## 準備作品

實際開發專案時才意識到之前的學習方式是有問題的，儘管理解影片闡述的概念，實際輸出程式碼時總會有預料之外的問題，更好的方式應該是學習完單個章節，就馬上動手練習，強化腦中的概念與程式碼輸出之間的連結。

原本以為能順利地開發，馬上碰到接連不斷的問題，就陷入了惡名昭彰的 [Tutorial Hell](https://www.youtube.com/watch?v=343EWZS9O88)，覺得是不是程度不夠、課程看得不夠多才會遇上這些阻礙。

> The best way to get out of the tutorial hell is to get your hands dirty.

這時更應該實際動手開發並解決問題，擔心自己的程式碼不夠簡潔反而阻礙著自己進步，過程中思考如何設計程式、練習下關鍵字、閱讀文件，經由自己思考的產出比任何 crash course 都有效。

第一個練習作品 [SpotifyActivities](https://github.com/irigyano/spotify-activities)，簡單的 API 串接作品，學習使用 React、Tailwind CSS 並對 OAuth 有了初步認識。

第二個作品 [Banngumi View](https://github.com/irigyano/banngumi-view) 為面試作品，包含前後端、資料庫及驗證系統。除了原本使用過的 React、Tailwind CSS，包含 TypeScript、Next、Redux、NextAuth，都是理解概念後就投入開發，實際運用時較容易釐清不熟悉的部分。

## 求職準備

以前沒有工作經驗，第一次寫履歷寫得悽慘無比，5/2 投了 40 間完全沒有回應，到 104 的[履歷健診](https://resume-clinic.104.com.tw/)請一位 Steven 大大看，結果學歷太差又沒經歷，對方也愛莫能助，但至少了解到企業是從哪些角度篩選履歷。

就學時期沉迷電玩所積的債在學經歷這關來了一記重拳。原先參考網路上轉職心得，以為有了作品至少能有面試機會，完全低估了學經歷的重要性，真是好傻好天真。

重新整理履歷並新增 cover letter，一開始還傻傻的使用系統預設，參考 [Alec 大大的文章](https://ithelp.ithome.com.tw/articles/10249164)稍加修飾。花一周時間完善作品，在履歷中針對作品的功能盡可能完整地呈現，既然學經歷比別人差，就嘗試讓對方的專注在自己擁有的技術上。

將作品部屬於 [Vercel](https://vercel.com/) 上，並將連結附在履歷中，如果看履歷的是 HR 可能不會操作 GitHub，大多數情形技術官也不會花時間看 repo，所以直接附上作品連結，相較於後端，前端作品若畫面做得好的優勢在此時就能體現。

5/15 再次出發，一樣投了 40 間，這次拿到了 3 個面試機會。

## 面試

確定面試日期後準備一份 slides，內容將履歷的部分稍微整理並分頁，包含背景、自學過程、作品，並將作品畫面截圖也放入 slides 中，以防現場 demo 時出問題可以應急，並再次確定筆電環境是否能順利展示作品。

### 新達科技

接案公司，客戶從金融業、零售業、醫院、律師事務所都有，內容包含客製系統、EIP 建置等。

辦公室很新，公司附近機能也很好。到場有兩位主管及一位 PM 一同參與，沒有考技術問題，主要圍繞在作品技術的選擇及實現，並由主管介紹其公司及該團隊目前的主要業務，由於使用的是 Angular，主管不介意我只會 React，表示願意從頭教。

結果：offer get

### 兆赫電子

公司在新竹工業區裡面。到場會先由人資帶到空的會議室，發一份英文試卷及一份程式試卷（手寫程式碼，難度不高但題意不清，不確定欲得出受測者哪方面的能力？），在裡面寫約一小時，交卷後有兩位主管進來，沒有討論試卷內容。

先詢問我對於公司業務是否了解，因 104 職缺沒有 JD，事先只知道是硬體廠，經主管說明為新建置的團隊，針對其硬體產品開發軟體雲端介面。惟當時臨場反應太差，沒辦法提出有建設性的問題，主管也看得出我並不熟悉其公司，當下感覺這間沒希望了，也沒主動介紹 side project（本次最大敗筆，**不尊重面試者也放棄自己練習的機會**）。

結果：3 周後收到感謝函

### 伽瑪科技

博弈業，因面試前已取得 offer，心裡對博弈還是有些芥蒂，向人資取消面試。

## 回顧

![Image](https://image-cdn.hypb.st/https%3A%2F%2Fhk.hypebeast.com%2Ffiles%2F2021%2F08%2Ftatsuki-fujimoto-free-manga-look-back-chinese-version-release-1-1.jpg?w=960&cbr=1&q=90&fit=max)

八個月從原本對未來毫無頭緒，到找到心目中的 dream job，真的非常幸運。中間實際認真 coding 的時間大約只有一半，決定要轉職還是花了大把時間在電玩上，有時甚至一週都沒開 VSCode，不到 deadline 不掉淚的死人個性還是沒改掉:laughing:。

工程師的職涯總算要開始了，非常期待了解正式的產品是如何從討論、設計、分工一直到交付、測試並上線。除了學習工作上使用的 Angular、前端開發技術外，督促自己下班繼續學習資料結構、演算法等 core concept，從 Harvard [CS50](https://www.youtube.com/playlist?list=PLhQjrBD2T380F_inVRXMIHCqLaNUd7bN4)、Berkeley [CS61A](https://inst.eecs.berkeley.edu/~cs61a/fa20/)、[CS61B](https://sp23.datastructur.es/) 以及 Primeagen 的 [The Last Algorithms Course You'll Need](https://frontendmasters.com/courses/algorithms/)，以及最後的大魔王 LeetCode [Blind 75](https://neetcode.io/practice)。

除了技術之外，軟實力也是修練的一環，職場應對、責任感及溝通能力都需要好好加強。寫 blog 訓練表達能力並總結工作內容和學習進度。建立 networking（Linkedin）、整理履歷內容，保持隨時可以面試的狀態，fighting！
