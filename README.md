# 🚀 COMP3133 – Lab Test 2

**Name:** Ahmed Gabeyre  
**Student ID:** 101446744  


---

## 📦 Project Overview

This is a **SpaceX Mission Explorer** built using Angular for COMP3133 Lab Test 2.  
It fetches data from the public SpaceX REST API and displays mission details in a clean, user-friendly UI using Angular Material.

---

## ✅ Features Implemented

### 🔭 Mission List View
Displays all SpaceX launches using a responsive grid of Material cards.

### 🎯 Filter by Launch Year
Users can enter a launch year to dynamically filter the list of missions.

### 🔍 Mission Details Page
Click on a mission to view detailed information, including:
- Rocket details
- Description
- Links to articles, Wikipedia, and videos

### 🛠 REST API Integration
Data fetched using `HttpClient` through a custom Angular service.

### 🎨 Responsive UI
Built using Angular Material components for a modern and clean design.

---

## 🧪 API Endpoints Used

- **All Launches:**  
  `https://api.spacexdata.com/v3/launches`

- **Filtered by Year:**  
  `https://api.spacexdata.com/v3/launches?launch_year=YYYY`

- **Launch by Flight Number:**  
  `https://api.spacexdata.com/v3/launches/:id`

---

## 🧱 Tech Stack

- Angular 17 (Standalone Components)
- Angular Material
- TypeScript
- Vercel (for deployment)
- SpaceX Public API

---

## 🚀 Live Demo

🔗 Hosted on Vercel:  
https://101446744-lab-test2-comp3133-2koc.vercel.app/

---

## 🧑‍💻 How to Run Locally

```bash
git clone https://github.com/your-username/101446744-lab-test2-comp3133
cd 101446744-lab-test2-comp3133
npm install
ng serve
