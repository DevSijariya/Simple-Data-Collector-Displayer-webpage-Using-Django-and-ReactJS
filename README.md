# Simple-Data-Collector-Displayer-webpage-Using-Django-and-ReactJS
User Info Manager is a full-stack web application that allows users to submit and manage their personal information, specifically names and email addresses. Built with React.js for the frontend and Django REST Framework for the backend, the application features a simple form for data entry and dynamically displays submitted information.

### `Project Structure`

├── simpleform_backend/ \n
│   ├── manage.py
│   ├── requirements.txt
│   ├── userinfo/
│   │   ├── __init__.py
│   │   ├── admin.py
│   │   ├── apps.py
│   │   ├── models.py
│   │   ├── serializers.py
│   │   ├── urls.py
│   │   ├── views.py
│   │   └── migrations/
│   └── UserInfoManager/
│       ├── __init__.py
│       ├── settings.py
│       ├── urls.py
│       └── wsgi.py
│
└──simple-frontend-form/
    ├── public/
    ├── src/
    │   ├── App.js
    │   ├── index.js
    │   ├── Form.js
    |   └── components/
    |       └──  Form.js
    ├── package.json
    └── package-lock.json

    Instructions for Running the Project
### `Set Up the Backend:`

1. Navigate to the backend directory.
2. Create a virtual environment and activate it.
3. Install the dependencies listed in requirements.txt.
4. Run the Django server.

#### `Set Up the Frontend:`

. Navigate to the frontend directory.
. Install the npm dependencies.
. Start the React development server.
. Access the Application:

Open a web browser and go to http://localhost:3000 to view the User Info Manager.
Conclusion
This code structure and the instructions provided should help you create a fully functional User Info Manager application. If you have any questions or need further assistance, feel free to ask!
