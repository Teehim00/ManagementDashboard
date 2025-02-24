# ใช้ Node.js image
FROM node:18-alpine

# ตั้งค่า directory
WORKDIR /app

# คัดลอกไฟล์ package และติดตั้ง dependencies
COPY package*.json ./
RUN npm ci

# คัดลอกโค้ดทั้งหมด
COPY . .

# # Generate Database
# RUN npx prisma migrate dev --name init

# Build แอป Next.js
RUN npm run build

# เปิดพอร์ต 3000 สำหรับ Next.js
EXPOSE 3000

# รัน Next.js แอป
CMD ["npm", "start"]
