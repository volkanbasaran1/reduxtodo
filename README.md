![ekran](https://github.com/volkanbasaran1/reduxtodo/assets/76842256/28cd3b45-e979-4d5e-8140-a73527e6b7ed)
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Redux ToDo List</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
        }
        #todo-container {
            width: 300px;
            background-color: #fff;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        #task-list {
            list-style: none;
            padding: 0;
            margin: 0;
        }
        .task-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 10px;
            border-bottom: 1px solid #eee;
        }
        .task-item.completed {
            text-decoration: line-through;
            color: #999;
        }
        .task-actions {
            display: flex;
        }
        .task-actions button {
            margin-left: 5px;
            cursor: pointer;
        }
    </style>
</head>
<body>
<div id="todo-container">
    <h2>Redux ToDo List</h2>
    <form id="add-task-form">
        <input type="text" id="task-input" placeholder="Yeni görev ekle..." />
        <button type="submit">Ekle</button>
    </form>
    <ul id="task-list"></ul>
</div>
</body>
</html>
