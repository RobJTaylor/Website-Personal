# This is a small hacky script to generate light and dark themes usins SASS
# SASS currently doesn't support media queries for color preference, so we
# need to remove the appropriate variables and then compile to light/dark css files
# CSS then switches out the files depending on results of media queries
#
# I'm not a master of Python, this surely could've been written better.
# But if it ain't broke, don't fix it.

import os

print("Starting...")

# Themes are lists, which are later written to files
lightTheme = []
darkTheme = []

lightStart = 0
lightEnd = 0
darkStart = 0
darkEnd = 0

print("\nDetermining line numbers for light/dark themes")

# Determine line numbers for beginnings and ends of themes
with open('sass/main.scss') as scssFile:
    for num, line in enumerate(scssFile, 1):
        lightTheme.append(line)
        darkTheme.append(line)
        if "// -- Light styling" in line:
            print 'Found light start at line: ', num
            lightStart = num
        if "// -- End light" in line:
            print 'Found light end at line: ', num
            lightEnd = num
        if "// -- Dark styling" in line:
            print 'Found dark start at line: ', num
            darkStart = num
        if "// -- End dark" in line:
            print 'Found dark end at line: ', num
            darkEnd = num

# Delete range of lines from each list
del darkTheme[lightStart - 1:lightEnd]
del lightTheme[darkStart - 1:darkEnd]

# Write lists to files
with open("sass/lightTheme.scss", "w+") as file:
    for line in lightTheme:
        print >> file, line

with open("sass/darkTheme.scss", "w+") as file:
    for line in darkTheme:
        print >> file, line

# Call sass to generate css files
print("\nGenerating light css")
os.system("sass sass/lightTheme.scss css/lightTheme.css")
print("Generating dark css")
os.system("sass sass/darkTheme.scss css/darkTheme.css")

print("\nDone!")