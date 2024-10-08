$(document).ready(function() {
    // ページの読み込みが完了したら実行

    // Memo 1 の処理

    // ローカルストレージからメモを読み込んで、メモリストに表示する関数
    function loadNotes1() {
        // ローカルストレージから 'notes1' キーでデータを取得
        var notes = JSON.parse(localStorage.getItem('notes1')) || [];
        // 取得したメモをリストに表示
        notes.forEach(function(note) {
            var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
            $('#noteList1').append(newNote);
        });
    }

    // メモリストの内容をローカルストレージに保存する関数
    function saveNotes1() {
        var notes = [];
        // メモリストの内容を配列に格納
        $('#noteList1 li').each(function() {
            notes.push($(this).text().replace('Delete', '').trim());
        });
        // 配列を 'notes1' キーでローカルストレージに保存
        localStorage.setItem('notes1', JSON.stringify(notes));
    }

    // Addボタンをクリックしたときに、メモを追加する処理
    $('#addNoteButton1').click(function() {
        // テキストエリアの内容を取得
        var noteText = $('#noteInput1').val().trim();

        // 入力が空でなければリストに追加
        if (noteText !== "") {
            // 新しいメモをリストに追加
            var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
            $('#noteList1').append(newNote);

            // テキストエリアをクリア
            $('#noteInput1').val("");

            // メモをローカルストレージに保存
            saveNotes1();
        }
    });

    // メモリストの削除ボタンがクリックされたときに、そのメモを削除する処理
    $('#noteList1').on('click', '.deleteNoteButton', function() {
        // 対象のメモをリストから削除
        $(this).parent().remove();
        // メモリストをローカルストレージに保存
        saveNotes1();
    });

    // Clearボタンがクリックされたときに、メモリストと入力欄をクリアする処理
    $('#clearNoteButton1').click(function() {
        // テキストエリアをクリア
        $('#noteInput1').val("");
        // メモリストをクリア
        $('#noteList1').empty();
        // ローカルストレージから 'notes1' のデータを削除
        localStorage.removeItem('notes1');
    });

    // ページが読み込まれたときに、保存されているメモを表示
    loadNotes1();

    // Memo 2 の処理も同様に設定
    function loadNotes2() {
        var notes = JSON.parse(localStorage.getItem('notes2')) || [];
        notes.forEach(function(note) {
            var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
            $('#noteList2').append(newNote);
        });
    }

    function saveNotes2() {
        var notes = [];
        $('#noteList2 li').each(function() {
            notes.push($(this).text().replace('Delete', '').trim());
        });
        localStorage.setItem('notes2', JSON.stringify(notes));
    }

    $('#addNoteButton2').click(function() {
        var noteText = $('#noteInput2').val().trim();
        if (noteText !== "") {
            var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
            $('#noteList2').append(newNote);
            $('#noteInput2').val("");
            saveNotes2();
        }
    });

    $('#noteList2').on('click', '.deleteNoteButton', function() {
        $(this).parent().remove();
        saveNotes2();
    });

    $('#clearNoteButton2').click(function() {
        $('#noteInput2').val("");
        $('#noteList2').empty();
        localStorage.removeItem('notes2');
    });

    loadNotes2();

 // Memo 3 の処理も同様に設定
 function loadNotes3() {
    var notes = JSON.parse(localStorage.getItem('notes3')) || [];
    notes.forEach(function(note) {
        var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList3').append(newNote);
    });
}

function saveNotes3() {
    var notes = [];
    $('#noteList3 li').each(function() {
        notes.push($(this).text().replace('Delete', '').trim());
    });
    localStorage.setItem('notes3', JSON.stringify(notes));
}

$('#addNoteButton3').click(function() {
    var noteText = $('#noteInput3').val().trim();
    if (noteText !== "") {
        var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList3').append(newNote);
        $('#noteInput3').val("");
        saveNotes3();
    }
});

$('#noteList3').on('click', '.deleteNoteButton', function() {
    $(this).parent().remove();
    saveNotes3();
});

$('#clearNoteButton3').click(function() {
    $('#noteInput3').val("");
    $('#noteList3').empty();
    localStorage.removeItem('notes3');
});

loadNotes3();


 // Memo 4 の処理も同様に設定
 function loadNotes4() {
    var notes = JSON.parse(localStorage.getItem('notes4')) || [];
    notes.forEach(function(note) {
        var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList4').append(newNote);
    });
}

function saveNotes4() {
    var notes = [];
    $('#noteList4 li').each(function() {
        notes.push($(this).text().replace('Delete', '').trim());
    });
    localStorage.setItem('notes2', JSON.stringify(notes));
}

$('#addNoteButton4').click(function() {
    var noteText = $('#noteInput4').val().trim();
    if (noteText !== "") {
        var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList4').append(newNote);
        $('#noteInput4').val("");
        saveNotes4();
    }
});

$('#noteList4').on('click', '.deleteNoteButton', function() {
    $(this).parent().remove();
    saveNotes4();
});

$('#clearNoteButton4').click(function() {
    $('#noteInput4').val("");
    $('#noteList4').empty();
    localStorage.removeItem('notes4');
});

loadNotes4();


 // Memo 55 の処理も同様に設定
 function loadNotes5() {
    var notes = JSON.parse(localStorage.getItem('notes5')) || [];
    notes.forEach(function(note) {
        var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList5').append(newNote);
    });
}

function saveNotes5() {
    var notes = [];
    $('#noteList5 li').each(function() {
        notes.push($(this).text().replace('Delete', '').trim());
    });
    localStorage.setItem('notes5', JSON.stringify(notes));
}

$('#addNoteButton5').click(function() {
    var noteText = $('#noteInput5').val().trim();
    if (noteText !== "") {
        var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList5').append(newNote);
        $('#noteInput5').val("");
        saveNotes5();
    }
});

$('#noteList5').on('click', '.deleteNoteButton', function() {
    $(this).parent().remove();
    saveNotes5();
});

$('#clearNoteButton5').click(function() {
    $('#noteInput5').val("");
    $('#noteList5').empty();
    localStorage.removeItem('notes5');
});

loadNotes5();

 // Memo 6 の処理も同様に設定
 function loadNotes6() {
    var notes = JSON.parse(localStorage.getItem('notes6')) || [];
    notes.forEach(function(note) {
        var newNote = $('<li>' + note + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList6').append(newNote);
    });
}

function saveNotes6() {
    var notes = [];
    $('#noteList6 li').each(function() {
        notes.push($(this).text().replace('Delete', '').trim());
    });
    localStorage.setItem('notes2', JSON.stringify(notes));
}

$('#addNoteButton6').click(function() {
    var noteText = $('#noteInput6').val().trim();
    if (noteText !== "") {
        var newNote = $('<li>' + noteText + '<button class="deleteNoteButton">Delete</button></li>');
        $('#noteList6').append(newNote);
        $('#noteInput6').val("");
        saveNotes6();
    }
});

$('#noteList6').on('click', '.deleteNoteButton', function() {
    $(this).parent().remove();
    saveNotes6();
});

$('#clearNoteButton6').click(function() {
    $('#noteInput6').val("");
    $('#noteList6').empty();
    localStorage.removeItem('notes6');
});

loadNotes6();





    // Memo 3 ~ 10 の処理も同様に続けて記述します
    // 以下同様に Memo 3, 4, 5,... の関数とイベント処理を記述
});