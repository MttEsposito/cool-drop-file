# CoolDropElement

Custom element created with Angular for manage the file input.

# How to use

1) include in your website the script for run the element and fontawesome css 
    
    get the css here ( https://fontawesome.com/ )
  
    <script type="text/javascript" src="public/element/cool-drop.el.js"></script>


2) then put in your HTML the tag 

    \<cool-upload multiple="" accept="" message="" onfiledrop="" >\</cool-upload>
    
    ## Element attribute 
    
    * <strong>multiple:</strong> Must pass a boolean (true/false) for enable or disable manage multiple files
      default :false
    
    * <strong>accept:</strong> Here you can pass limit to the type of the files type like just image or document(image/* or only a single extension .txt or even all *)  
      default : * (all)
      
     * <strong>message:</strong> Must pass a string there will be the message showed in the element ('drop files here')
      default : ''
      
     * <strong>onfiledrop:</strong> this must pass a function this will be the callback every time a files is dropped or added to the           element
     example :
      JS :
      var myfunction = function(files){
        console.log("files dropped",files)
        }
        HTML:
        onfiledrop="myfunction"
      default : null
        
