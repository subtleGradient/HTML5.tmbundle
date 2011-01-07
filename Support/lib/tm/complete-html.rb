#!/usr/bin/env ruby

require 'pp'
require ENV['TM_BUNDLE_SUPPORT'] + '/lib/tm/complete'
module TextMate
  class Complete

    def data(raw_data=nil)
      fix_legacy
      
      raw_data ||= read_data
      return {} unless raw_data and not raw_data.empty?
      
      @data = parse_data raw_data

      @data['suggestions'].reject! {|c| c['tag'] && c['tag'] != $TAG }

      return @data
    end

  end
end

$TAG = Word.current_word(/([-:a-z]+)</,:left)
#pp $TAG
#pp TextMate::Complete.new.data['suggestions']
