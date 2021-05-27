# Chia Auto Full Node
Auto add full node from chia.keva.app

การใช้งาน

1.ติดตั้ง NodeJS
https://nodejs.org/en/download/

2.นำ code ไปว่างใน Drive C
C:\Chia-Auto-Full-Node

3.พิมพ์คำสั่ง
npm install

4.รันโปรแกรมด้วยคำสั่ง  (เปิดหน้า cmd ทิ้งไว้ใน script ทำงานจทำทุกๆ 15 นาที)
node app.js

5.ถ้ามีปัญหาให้แก้ด้วยการลงคำสั่ง
npm install got --save
npm install node-cron --save
npm install jsdom --save

*** เป็น script เพื่อช่วยการในการเพิ่ม Full Node แบบไม่ต้องเพิ่มด้วยมือ
*** ไม่มีการรับประกันว่าหลังจากรัน Script แล้วจะได้เหรียญ เป็นเพียงตัวช่วยเท่านั้น
*** Script เขียนแบบรีบๆ ต้องขออภัยถ้ามีข้อผิดพลาดประการใด 
*** ไม่มีการดักจับข้อมูลของผู้ใช้ใดๆทั้งสิ้น 
