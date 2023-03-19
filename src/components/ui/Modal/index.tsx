import { Box, Button, Modal } from '@mui/material'
import React, { FC, useCallback, useState } from 'react'

interface ModalProps {
  trigger?: React.ReactNode
  children: React.ReactNode
  isOpenedDefault?: boolean
  customHandler?: (value?: boolean) => void;
}

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "fit-content",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

export const UiModal: FC<ModalProps> = (props) => {
  const {
    trigger,
    children,
    isOpenedDefault,
    customHandler,
  } = props
  const [isModalVisible, setModalVisible] = useState<boolean>(!!isOpenedDefault)

  const handleVisible = useCallback((value: boolean) => {
    setModalVisible(value)
    customHandler && customHandler(value)
  }, [])

  return (
    <div>
      {!isOpenedDefault && (
        <Button
          variant='contained'
          onClick={(e) => {
            e.stopPropagation()
            handleVisible(true)
          }}
          disableRipple
          sx={{
            all: 'unset !important',
            cursor: 'pointer !important',
          }}>{trigger || children}</Button>
      )}


      <Modal
        open={isModalVisible}
        onClose={() => handleVisible(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          {children}
        </Box>
      </Modal>
    </div>
  )
}
