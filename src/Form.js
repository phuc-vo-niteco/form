import React, { useEffect, useState, useRef } from 'react';
import config from './config';
import Icons from "./fields/Icons";
import Components, {addOn} from "./fields";
import './App.css';
import './Form.scss';

function App() {
  const [data, setData] = useState({});
  const formRef = useRef(null);
  const [form, setForm] = useState(JSON.parse(window.localStorage.getItem('form')) || config.form);
  const [formSettings] = useState(addOn);

  const [fieldConfig, setFieldConfig] = useState([]);
  const [fieldConfigIndex, setFieldConfigIndex] = useState(null);

  const onConfig = ({ config, index }) => {
    console.log('config', config)
    setFieldConfig(config);
    setFieldConfigIndex(index);
  }

  const onSaveFieldConfig = () => {
    console.log('fieldConfig', fieldConfig);
    const _form = Array.from(form);

    fieldConfig.forEach(item => {
      if (item.type === 'checkbox') {
        _form[fieldConfigIndex][item.name] = item.checked;
      } else {
        _form[fieldConfigIndex][item.name] = item.value;
      }
    });

    setForm(_form);
  };

  const onDeleteFieldConfig = () => setForm(() => {
    setFieldConfig([]);
    return Array.from(form).filter((_, index) => index != fieldConfigIndex);
  });

  const component = ({ item, index, onConfig }) => {
    const Component = Components[item.type] || Components.text;
    return <Component
      {...item}
      index={index}
      onConfig={onConfig}
      onChange={(event) => {
        saveValue(event, item);
        onValidate(event, item);
      }} />
  }


  const saveValue = (event, item) => {
    if (item.type === 'checkbox') {
      item.checked = event.target.checked;
    } else {
      item.value = event.target.value;
    }
  }

  const onValidate = (event, item) => {
    // form.forEach(item => {
    //   _validate(item)
    // });
    _validate(item)
  }
  const _validate = (item) => {
    if (!item.validate) {
      return;
    }
    if (item.validate.required) {
      if (!item.value) {
        item.message = item.validate.required.message || 'This field is required';
      } else {
        item.message = '';
      }
    }
  }

  useEffect(() => {
    console.log('data', data);
    formRef.current.addEventListener('submit', (event) => {
      event.preventDefault();
      event.stopPropagation();
      const _form = Array.from(form);
      _form.forEach(item => {
        _validate(item)
      });
      setForm([..._form]);
    });
  }, []);

  //Sync to store
  useEffect(() => {
    syncToStore();
  }, [form]);

  const [draggedItem, setDraggedItem] = useState(null);

  const onDragStart = (e, index) => {
    setDraggedItem(form[index]);
    e.dataTransfer.effectAllowed = "move";
    console.log('onDragStart', form[index]);

    // e.dataTransfer.setData("text/html", e.target.parentNode);
    // e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
  };

  const onDragStartCreate = (e, index) => {
    e.preventDefault();
    setForm(() => {
      const _item = Object.assign({}, formSettings[index]);
      const _form = Array.from(form);

      return [..._form, _item];
    });
  };

  const onDragOver = index => {
    if (!draggedItem) {
      return;
    }
    console.log('onDragOver', index);

    const _draggedOverItem = form[index];

    if (draggedItem === _draggedOverItem) {
      return;
    }

    const _form = form.filter(item => item !== draggedItem);
    _form.splice(index, 0, draggedItem);
    setForm(_form);

  };

  const onDragEnd = () => {
    setDraggedItem(null);
    syncToStore();
  };

  const syncToStore = () => {
    window.localStorage.setItem('form', JSON.stringify(form));
  };

  const choseCol = (index, col) => {
    const _form = Array.from(form);
    _form[index].col = col;
    setForm([..._form]);
  }

  return (
    <div className="_App container">
      <form ref={formRef} onChange={(e) => {
        const { name, value } = e.target;
        console.log(formRef);
        const _data = Array.from(formRef.current).reduce((acc, item) => {
          acc[item.name] = item.value;
          return acc;
        }
          , {});
        setData({ ...data, ..._data });
        console.log(data);
      }}>
        <div className='row'>

          {/* Collection */}
          <div className='col-3'>
            <div className='form-setting'>
              <div className="">
                {
                  formSettings.map((item, index) => {

                    return (
                      <div
                        onClick={(event) => onDragStartCreate(event, index)}
                        key={item.id} className={`form-setting-item form-group form-col-${item.col || 12}`}>
                        <div className='form-plus-overload'>
                          <Icons.PlusCircle />
                        </div>
                        {item.label && <label className='form-label' for={item.id + '-create'}>{item.label}</label>}
                        {component({ item, index, onConfig: null })}
                      </div>
                    )
                  })
                }
              </div>
            </div>
          </div>

          {/* Preview Form */}
          <div className='col-6'>
            <div className="form-content">
              <div className="">
                <div className="form-container">
                  <div className="form-row">
                    {
                      form.map((item, index) => {

                        return (
                          <div draggable
                            onDragOver={() => onDragOver(index)}
                            onDragStart={(event) => onDragStart(event, index)}
                            onDragEnd={onDragEnd}
                            key={index} className={`form-group form-col-${item.col || 12}`}>
                              {
                                [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].reverse().map((col) => {
                                  return (
                                    <div className={`choose-col choose-col-${col}`} style={{ width: (col / 12) * 100 + '%' }} onClick={() => choseCol(index, col)}>{col}</div>
                                  )
                                })
                              }
                            {item.label && <label className='form-label' for={item.id}>{item.label}</label>}
                            {component({ item, index, onConfig })}
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
              <div className='my-3'>
                <button type="submit" className="btn btn-primary btn-sm rounded-0">Submit</button>
              </div>
            </div>
          </div>

          {/* Right container */}
          <div className='col-3' style={{ display: fieldConfig.length > 0 ? 'block' : 'none' }}>
            <div className='config-about'>
              <div className="">
                <h5 className='d-flex align-items-center text-primary'><Icons.Sliders /><span className='mx-2'>Settings</span></h5>
                <div className='form-data'>
                  {
                    fieldConfig.map((item, index) => {
                      return (
                        <div
                          key={item.id}
                          className={`form-setting-config form-group form-col-12`}>
                          {item.label && <label className='form-label' for={item.id + '-config'}>{item.label}</label>}
                          {component({ item, index, onConfig: null })}
                        </div>
                      )
                    })
                  }
                </div>
              </div>
              <div className='my-3'>
                <button type="button"
                  onClick={onSaveFieldConfig} className="btn btn-primary btn-sm rounded-0">
                  Save
                </button>
                <button type="button"
                  onClick={onDeleteFieldConfig} className="btn btn-danger btn-sm mx-1 rounded-0">
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </form >
    </div>
  );
}

export default App;
