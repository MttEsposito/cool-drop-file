# CoolDropElement

Custom element created with Angular for manage the file input.

# How to use

1) include in your website the script for run the element and fontawesome css 
    
    get the css here ( https://fontawesome.com/ )
  
    <script type="text/javascript" src="public/element/cool-drop.el.js"></script>


2) then put in your HTML the tag 

    \<cool-upload multiple="" accept="" message="" onfiledrop="" >\</cool-upload>
    
    ## Element attribute 
    
    * <strong>multiple:</strong> Must pass a boolean (true/false) for enable or disable manage multiple files<br>
      default :false
    
    * <strong>accept:</strong> Here you can pass limit to the type of the files type like just image or document(image/* or only a single extension .txt or even all *) <br> 
      default : * (all)
      
     * <strong>message:</strong> Must pass a string there will be the message showed in the element ('drop files here')<br>
      default : ''
      
     * <strong>onfiledrop:</strong> this must pass a function this will be the callback every time a files is dropped or added to the           element<br>
     example :<br>
      JS :<br>
      var myfunction = function(files){<br>
        console.log("files dropped",files)<br>
        }<br>
        HTML:<br>
        onfiledrop="myfunction"<br>
      default : null<br>
            
            
  <strong>example</strong>
  <br>
        
<img src="https://raw.githubusercontent.com/MttEsposito/cool-drop-file/master/src/assets/example.PNG"/>
