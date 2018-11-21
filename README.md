# YUNODOC3
YUNODOC3 is a program to help developers doccument less by turning DOC comments into tables witch are easy to reference.


## Examples
**Comments like these are written into the developer's code:**


#DOC VAR mFltTemp TYP float PUR a temp float variable


#DOC VAR mIntTemp TYP integer PUR another temp int variable

**When yunodoc3 is ran against the source it converts those comments to a table like this:**
<pre>
|---------------------------------------------------------------------|
| VARIABLES |                                                         |
|-------------------|--------------|----------------------------------|
|    ~Variables~    |    ~Type~    |    ~Purpose~                     |
|-------------------|--------------|----------------------------------|
|    mFltTemp       |    float     |    a temp float variable         |
|    mIntTemp       |   intiger    |    a temp int variable           |
|-------------------|--------------|----------------------------------| 
</pre>


**Comments like these can also be written into the developer's code to create a more standard "TODO" style comment in the table:**


#DOC NOTE need to optimize load times for web content


#DOC NOTE fix user's profile photo not running

**When yunodoc3 is ran against the source it converts those comments to a table like this:**
<pre>
|--------------------------------------------------------------------------|
| VARIABLES |                                                              |
|-------------------|--------------|---------------------------------------|
|    ~Variables~    |    ~Type~    |    ~Purpose~                          |
|-------------------|--------------|---------------------------------------|
|    mFltTemp       |    float     |    a temp float variable              |
|    mIntTemp       |   intiger    |    a temp int variable                |
|--------------------------------------------------------------------------|
|  NOTES |                                                                 |
|--------------------------------------------------------------------------|
|    File           |  Line  |    NOTE      |                              |
|--------------------------------------------------------------------------|
|   [FILENAMEHERE]  |   11   | need to optimize load times for web content |
|   [FILENAMEHERE]  |   01   | fix user's profile photo not running        |
|--------------------------------------------------------------------------| 
</pre>

Further doccumentation and usage instrctions are located at: https://software.snowkatdevelopmentstudios.site/rtd/yunodoc3/
