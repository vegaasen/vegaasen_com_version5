#!/bin/bash
DEFAULT_LESS_FILE=../resources/css/my.less;
DEFAULT_CSS_FILE=../resources/css/my.css;

echo "Trying to remove old files";
if [ ! -f "$DEFAULT_CSS_FILE" ]; then
	echo "File exists. Removing this.";
	rm -f $DEFAULT_FILE_CSS;
fi

echo "Converting from less-source to css.";
lessc --compress $DEFAULT_LESS_FILE $DEFAULT_CSS_FILE;
echo "Done converting file to location $DEFAULT_CSS_FILE";
echo "LESS-reference and LESS-javascript-reference can now be removed in the index.html-file :-)";
