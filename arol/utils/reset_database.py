import os

root = os.getcwd()
dirs = os.listdir()

for file in dirs:
    d = os.path.join(root, file)
    if os.path.isdir(d):
        folder = os.path.join(d, "migrations/")
        if os.path.exists(folder):
            migration_folder = os.listdir(folder)
            for mig in migration_folder:
                if mig != "__init__.py" and mig != "__pycache__":
                    os.remove(os.path.join(folder, mig))


os.remove("db.sqlite3")
with open("db.sqlite3", "w") as fp:
    pass
