# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

reposts1 = 7
# Expected output: '7 is odd'
reposts2 = 42
# Expected output: '42 is even'
reposts3 = 221
# Expected output: '221 is odd'

# Pseudo code:
# Define a method is_even
# Input: one number
# Output: boolean
def is_even_odd int
    if int % 2 == 0
        "#{int} is even"
    else
        false
        "#{int} is odd"
    end
end
p is_even_odd 42

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. 
# HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

beatles_album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
beatles_album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
beatles_album3 = 'Abbey Road'
# Expected output: 'bby Rd'

# Pseudo code:
#Define a method: remove_vowels
#Input: string
#output: string with no vowels
    #Use .delete

def remove_vowels string
    result = string.delete('aeiouAEIOU')
end
p remove_vowels 'Sgt Pepper'

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forward or backward. Use the test variables provided.


palindrome_test_case1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
palindrome_test_case2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
palindrome_test_case3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

# Pseudo code:
# Define a method: is_palendrome
# Input: string
# Output: string
    #use conditional to determine if palindrome 
    #use .downcase to lower case words
    #use .reverse to compare the word to its reverse


def is_palindrome string
    if string.downcase == string.downcase.reverse
        "#{string} is a palindrome."
    else
        "#{string} is not a palindrome."
    end
end
p is_palindrome 'Rotator'
