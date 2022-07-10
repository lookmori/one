import React, { useEffect } from 'react';
import styles from './styles.module.css';
export default function InputFile(){
useEffect(() => {
  const i = document.getElementById('files')
  const a = document.querySelector('input')
  a.addEventListener('change',handleFiles,false)
    // 获取文件
  function handleFiles () {
    const fileList = this.files;
    console.log(fileList,'文件列表');
    
  }
  function createChunkFiles(file) {
    let current = 0; //当前文件分片位置
    const chunkSize = 1*1024*1024; //分片大小
    let chunk = [];
    while(current <file) {
      let a = file.slice(current, current+ chunkSize)
      chunk.push(a);
      current+=chunkSize;
    }
    return chunk; //将切片后的文件返回回去
  }



},[])
  return (
    <>
        <input type="file" id="files" className={styles.file}/>
        <label htmlFor="files" className={styles.filesName}>选择文件</label>
    </>

  )
}
