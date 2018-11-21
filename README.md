# YUNODOC3
YUNODOC3 is a program to help developers doccument less by turning DOC comments into tables witch are easy to reference.


## Examples
**Comments like these are written into the developer's code:**


#DOC VAR mFltTemp TYP float PUR a temp float variable
#DOC VAR mIntTemp TYP integer PUR another temp int variable

**When yunodoc3 is ran against the source it converts that comment to a table like this:**
<pre>
|-------------------|--------------|----------------------------------|
|    ~Variables~    |    ~Type~    |    ~Purpose~                     |
|-------------------|--------------|----------------------------------|
|    mFltTemp       |    float     |    a temp float variable         |
|    mIntTemp       |   intiger    |    a temp int variable           |
|-------------------|--------------|----------------------------------| 
</pre>

Further doccumentation and usage instrctions are located at: https://software.snowkatdevelopmentstudios.site/rtd/yunodoc3/
