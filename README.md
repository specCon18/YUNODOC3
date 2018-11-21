# YUNODOC3
YUNODOC3 is a program to help developers doccument less by turning DOC comments into tables witch are easy to reference.


## Examples
**Comment like this is written in the users code:**


#DOC VAR [VARIABLE HERE] TYP [VAR TYPE HERE] PUR [PURPOSE OF VARIABLE], into a doc table.


**When yunodoc3 is ran against the file it converts that comment to this:**
<pre>
|-------------------|--------------|----------------------------------|
|    ~Variables~    |    ~Type~    |    ~Purpose~                     |
|-------------------|--------------|----------------------------------|
|    mFltTemp       |    float     |    a temp variable               |
|-------------------|--------------|----------------------------------| 
</pre>

Further doccumentation and usage instrctions are located at: https://software.snowkatdevelopmentstudios.site/rtd/yunodoc3/
