import { Component, OnInit } from '@angular/core';
import { BatchService } from '../batch.service';
import * as $ from 'jquery';


@Component({
  selector: 'app-batch-details',
  templateUrl: './batch-details.component.html',
  styleUrls: ['./batch-details.component.css']
})
export class BatchDetailsComponent implements OnInit {

  constructor(private service:BatchService) {
   }
   batchdetails(data){
     console.log(data)
     this.service.postdetails(data).subscribe(data =>{
       console.log(data)
     },err=>{
       console.log(err)
     },()=>{
       console.log("Post Successfully")
     })
   }

  ngOnInit() {
    var initialText = $('.editable').val();
    $('.editOption').val(initialText);
    
    $('#test').change(function(){
    var selected = $('option:selected', this).attr('class');
    var optionText = $('.editable').text();
    
    if(selected == "editable"){
      $('.editOption').show();
    
      
      $('.editOption').keyup(function(){
          var editText = $('.editOption').val();
          $('.editable').val(editText);
          $('.editable').html(editText);
      });
    
    }else{
      $('.editOption').hide();
    }
    });


    var $batchtype = $('#batchtype'),
    $feeInfo = $('#province');
$batchtype.change(function() {
    if ($batchtype.val() == 'other') {
    $feeInfo.attr('disabled', 'disabled').val('0');
       
    } else {
         $feeInfo.removeAttr('disabled');
    }
}).trigger('change'); // added trigger to calculate initial state


  }
  
  }


