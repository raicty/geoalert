# GeoAlert

GeoAlert is a full-stack web application that allows users to create, visualize, and save custom geographic zones on an interactive map. Built with a modern React frontend and a FastAPI backend, GeoAlert is designed for rapid prototyping and real-world geofencing use cases.

---

## 🚀 Features

- **Interactive Map Drawing:** Select and draw polygonal zones directly on a map (powered by Leaflet).
- **Zone Naming:** Assign custom names to each zone for easy identification.
- **RESTful API:** FastAPI backend for robust and fast zone data handling.
- **CORS Enabled:** Seamless local development between frontend and backend.
- **Modern Stack:** React 19, FastAPI, Leaflet, Axios, and more.

---

## 🖥️ Tech Stack

- **Frontend:** React, React-Leaflet, Leaflet, Axios
- **Backend:** FastAPI, Pydantic
- **Other:** Python 3.x, Node.js, npm

---

## 📦 Project Structure

```
geoalert/
│
├── backend/
│   └── venv/            # Python virtual environment & FastAPI backend
│       └── main.py      # FastAPI app with CORS and zone endpoint
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── App.js       # Main React app
│   │   ├── ZoneMap.js   # Map drawing component
│   │   └── ...          # Other React files
│   └── package.json     # React dependencies
│
├── .gitignore
└── README.md
```

---

## ⚡ Quick Start

### 1. Clone the repository

```sh
git clone https://github.com/your-username/geoalert.git
cd geoalert
```

### 2. Start the Backend (FastAPI)

```sh
cd backend/venv
# Activate your Python virtual environment if needed
# For Windows:
# .\Scripts\activate
# For Unix/Mac:
# source bin/activate

pip install fastapi uvicorn
uvicorn main:app --reload
```
- The backend will run at [http://127.0.0.1:8000](http://127.0.0.1:8000)
- API docs available at [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)

### 3. Start the Frontend (React)

```sh
cd ../../client
npm install
npm start
```
- The frontend will run at [http://localhost:3002](http://localhost:3002)

---

## 🗺️ Usage

1. Open [http://localhost:3002](http://localhost:3002) in your browser.
2. Enter a zone name.
3. Click on the map to draw a polygon (at least 3 points).
4. Click **Submit Zone** to save your zone.
5. Success or error messages will be displayed.

---

## 🛠️ Development Notes

- **CORS** is enabled in the backend for local development.
- All zone data is currently handled in-memory (no database).
- To extend: add persistent storage, authentication, or more advanced geospatial features.

---

## 📄 Example API Request

```http
POST /api/zones
Content-Type: application/json

{
  "name": "My Zone",
  "coordinates": [
    [28.6139, 77.2090],
    [28.6140, 77.2100],
    [28.6150, 77.2110]
  ]
}
```

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

---

## 📃 License

This project is licensed under the MIT License.

---

## 🙋‍♂️ Author

- [Your Name](https://github.com/your-username)

---

**GeoAlert** – Draw. Save. Alert.