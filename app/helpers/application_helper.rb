module ApplicationHelper
  def alert_for(flash_type)
    { success: 'alert-success',
      error: 'alert-danger',
      alert: 'alert-warning',
      notice: 'alert-info'
    }[flash_type.to_sym] || flash_type.to_s
  end
  ActionView::Base.field_error_proc = Proc.new do |html_tag, instance|
    class_attr_index = html_tag.index 'class="'
  
    if class_attr_index
      html_tag.insert class_attr_index+7, 'form-error '
    else
      html_tag.insert html_tag.index('>'), ' class="form-error"'
    end
  end
end
