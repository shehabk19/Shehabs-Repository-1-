# Function to display the menu options
def display_menu():
    """
    Display the available menu options to the user.
    """
    print("\nTo-Do List Manager")
    print("1. View tasks")
    print("2. Add a task")
    print("3. Remove a task")
    print("4. Exit")

# Function to view tasks
def view_tasks(task_list):
    """
    Display all tasks in the to-do list.
    """
    if not task_list:
        print("Your to-do list is empty!")
    else:
        print("\nYour Tasks:")
        for index, task in enumerate(task_list, start=1):
            print(f"{index}. {task}")

# Function to add a task
def add_task(task_list):
    """
    Add a new task to the to-do list.
    """
    new_task = input("Enter the task you want to add: ")
    task_list.append(new_task)
    print(f"Task '{new_task}' added to the list.")

# Function to remove a task
def remove_task(task_list):
    """
    Remove a task from the to-do list by its number.
    """
    view_tasks(task_list)
    if task_list:
        try:
            task_number = int(input("Enter the number of the task to remove: "))
            removed_task = task_list.pop(task_number - 1)
            print(f"Task '{removed_task}' removed from the list.")
        except (IndexError, ValueError):
            print("Invalid task number. Please try again.")

# Main program
def main():
    """
    Main function to run the to-do list manager.
    """
    tasks = []  # List to store tasks
    while True:
        display_menu()
        choice = input("Choose an option (1-4): ")
        
        # Decision-making structure to handle user choices
        if choice == "1":
            view_tasks(tasks)
        elif choice == "2":
            add_task(tasks)
        elif choice == "3":
            remove_task(tasks)
        elif choice == "4":
            print("Exiting the To-Do List Manager. Goodbye!")
            break
        else:
            print("Invalid choice. Please select a valid option.")

# Run the program
if __name__ == "__main__":
    main()
