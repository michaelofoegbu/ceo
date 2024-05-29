from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager
import time


# Function to perform Google search
def google_search(query):
    driver = webdriver.Chrome(ChromeDriverManager().install())
    driver.get("https://www.google.com/")

    # Find the search box and input the query
    search_box = driver.find_element_by_name("q")
    search_box.send_keys(query)
    search_box.submit()

    # Wait a bit to see the results
    time.sleep(2)

    # Close the browser
    driver.quit()


# Function to read words from text file
def read_words_from_file(file_path):
    with open(file_path, "r") as file:
        words = [line.strip() for line in file]
    return words


# Main function
def main():
    # Path to your text file containing words (one word per line)
    file_path = r"C:\Users\user\OneDrive\Documents\testing.txt"

    # Read words from the file
    words = read_words_from_file(r"C:\Users\user\OneDrive\Documents\testing.txt")

    # Perform Google search for each word
    for word in words:
        google_search(word)


if __name__ == "__main__":
    main()
